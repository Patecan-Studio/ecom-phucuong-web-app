import {
  isNegativeInteger,
  isPositiveInteger,
} from "./validations/number";
import {
  isMaxLengthChar,
  isMaxLengthByte,
  isRequired,
  isNumberValue,
  isIntegerValue,
} from "./validations/text";

export type ValidationRules = {
  required?: boolean;
  requiredSelect?: boolean;
  maxChar?: number;
  maxByte?: number;
  isNumber?: boolean;
  isNumberInteger?: boolean;
  isNumberIntegerDecimal?: boolean;
  isNumbericDecimalValue?: boolean;
  isAlphabetNumberUnderscoreDashDot?: boolean;
  isNumberiDecimal2DigitscWithComma?: boolean;
  isNumbericWithComma?: boolean;
  isNumbericValueWithDigits14?: boolean;
  isNumbericValueWithDigits315?: boolean;
  isNumbericValueWithDigits47?: boolean;
  isNumbericValueWithDigits61?: boolean;
  isNumbericValueWithDigits62?: boolean;
  isNumbericValueWithDigits65?: boolean;
  isNumbericValueWithDigits122?: boolean;
  isNumbericValueWithDigits32?: boolean;
  isNumbericValueWithDigits92?: boolean;
  isNumberIntegerWithCustomMessage?: boolean;

  isPositiveInteger?: boolean;
  isNegativeInteger?: boolean;
  isPositiveDecimal?: object;

  requiredSL05002?: boolean;
  isValidCoordinateSL02002?: boolean;
};

const getKeyValue =
  <T extends unknown, U extends keyof T>(obj: T) =>
  (key: U) =>
    obj[key];

export const validateRules = {
  required: {
    test: (val: string, arg: any) => (arg ? isRequired(val) : true),
    message: (label: string) =>
      ("vui lòng nhập data cho {0}").replace("{0}", label),
  },
  requiredSelect: {
    test: (val: string, arg: any) => (arg ? isRequired(val) : true),
    message: (label: string) =>
      ("vui lòng chọn data cho {0}").replace("{0}", label),
  },
  maxChar: {
    test: (val: string, maxLength: number) => isMaxLengthChar(val, maxLength),
    message: (label: string) =>
      ("giá trị của {0} lớn hơn so với quy định").replace("{0}", label),
  },
  maxByte: {
    test: (val: string, maxLength: number) => isMaxLengthByte(val, maxLength),
    message: (label: string) =>
      ("giá trị của {0} lớn hơn so với quy định").replace("{0}", label),
  },
  isPositiveInteger: {
    test: (val: string) => isPositiveInteger(val),
    message: (label: string) =>
      ("giá trị của {0} không phải số nguyên dương").replace("{0}", label),
  },
  isNegativeInteger: {
    test: (val: string) => isNegativeInteger(val),
    message: (label: string) =>
      ("giá trị của {0} không phải số nguyên âm").replace("{0}", label),
  },

  isNumber: {
    test: (val: string) => isNumberValue(val),
    message: (label: string) =>
      ("giá trị của {0} không phải là số").replace("{0}", label),
  },
  isNumberInteger: {
    test: (val: string) => isIntegerValue(val),
    message: (label: string) =>
      ("giá trị của {0} không phải số nguyên").replace("{0}", label),
  },

} as const;

export default (type: any) => (val: string, label: string, arg: any) => ({
  isValid: getKeyValue(validateRules)(type).test(val ? val : "", arg),
  message: getKeyValue(validateRules)(type).message(label),
});


