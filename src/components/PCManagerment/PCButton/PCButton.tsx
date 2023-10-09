import React from "react";
import "./PCButton.scss";
import { Button, ButtonProps, ConfigProvider} from "antd";

declare const ButtonTypes: readonly [
    "default",
    "primary",
    "secondary",
    "grey",
    "dangerous"
];
type ButtonType = typeof ButtonTypes[number];

type PCButtonProps = Omit<ButtonProps, "className" | "type"> &
    React.RefAttributes<HTMLElement> & {
        className?: string;
        type?: ButtonType
    };

const PCButton: React.FC<PCButtonProps> = ({
    className = "",
    type = "",
    ...buttonProps
}) => {
    const addSelectorByType = () => {
        switch (type) {
            case "default":
                return "pc-default-button";
            case "primary":
                return "pc-primary-button";
            case "secondary":
                return "pc-secondary-button";
            case "grey":
                return "pc-grey-button";
            case "dangerous":
                return "pc-dangerous-button";
            default:
                return "pc-primary-button"
        }
    }

    return (
        <ConfigProvider autoInsertSpaceInButton={false}>
            <Button
            className={`pc-button ${className} ${addSelectorByType}`}
            {...buttonProps} />
        </ConfigProvider>
    )

}

export default React.memo(PCButton);