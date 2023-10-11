import React from "react";
import {
  Select,
  Form,
  FormItemProps,
  SelectProps,
  ConfigProvider,
  ThemeConfig,
} from "antd";
import { FormLabelAlign, NamePath } from "antd/lib/form/interface";
import { DefaultOptionType } from "antd/es/select";
import { Rule } from "antd/es/form";
import "./PCDropdown.scss";
import validates, { ValidationRules } from "@/share/utils/validates";


const { Option } = Select;

const themeConfig: ThemeConfig = {
  token: {
    controlHeight: 36,
  },
};

type PCDropdownProps = Omit<SelectProps, "options" | "allowClear"> & {
  name: NamePath;
  label: any; // string or html
  className?: string;
  labelAlign?: FormLabelAlign | undefined;
  labelCol?: {
    span?: number;
  };
  wrapperCol?: {
    span?: number;
  };
  rules?: Rule[];
  options?: any[];
  colon?: boolean;
  isTransparent?: boolean;
  allowClear?: boolean;
  formItemProps?: FormItemProps<any>;
  selectProps?: SelectProps;
  validations?: ValidationRules;
  placeholder?: React.ReactNode;
};

const PCDropdown: React.FC<PCDropdownProps> = ({
  name,
  label,
  className,
  labelAlign = "left",
  labelCol,
  wrapperCol,
  rules,
  options,
  colon = false,
  isTransparent = false,
  allowClear = true,
  formItemProps,
  selectProps,
  validations,
  placeholder,
  ...props
}) => {

  const validateInput = (rule: any, value: any) => {
    const labelText = typeof label == "object" ? label.props.children : label;

    if (!validations) {
      return Promise.resolve();
    }

    const validationTypes: string[] = Object.keys(
      validations as ValidationRules
    );
    for (let i = 0; i < validationTypes.length; i++) {
      const validationType = validationTypes[i] as keyof ValidationRules;
      const result = validates(validationType)(
        value ?? "",
        labelText,
        validations && validations[validationType]
      );

      if (!result.isValid) {
        return Promise.reject(new Error(result.message));
      }
    }

    return Promise.resolve();
  };

  const handleOnChangeDropdown = (
    value: any,
    option: DefaultOptionType | DefaultOptionType[]
  ) => {
    if (props.onChange) {
      props.onChange(value, option);
    }
    if (
      document &&
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPad/i))
    ) {
      (
        document.querySelector(
          ".pc-dropdown-popup:not(.ant-select-dropdown-hidden)"
        ) as HTMLInputElement
      )?.blur();
    }
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <Form.Item
        name={name}
        label={label}
        className={`pc-dropdown ${
          isTransparent ? "pc-dropdown-transparent" : ""
        } ${className}`}
        labelAlign={labelAlign}
        labelCol={labelCol}
        rules={[
          ...(rules ? rules : []),
          {
            validator: validateInput,
          },
        ]}
        wrapperCol={wrapperCol}
        colon={colon}
        {...formItemProps}
      >
        <Select
          popupClassName="pc-dropdown-popup"
          showSearch
          allowClear={allowClear}
          filterOption={(input, option: any) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={options?.map((item: any) => {
            if (item.key && item.value) {
              return {
                value: item.key,
                label: item.value,
              };
            } else {
              return item;
            }
          })}
          placeholder={placeholder ? placeholder : "select data"}
          {...selectProps}
          {...props}
          onChange={handleOnChangeDropdown}
        ></Select>
      </Form.Item>
    </ConfigProvider>
  );
};

export default React.memo(PCDropdown);