import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";
import "./PCPage.scss"

type PCPageType = React.PropsWithChildren<{
    className: string;
    pageTitle: string;
    subTitle: string;
    isBackTop: boolean;
}>

const PCPage: React.FC<PCPageType> = ({
    className,
    pageTitle,
    subTitle,
    isBackTop,
}) => {
    return (
    <div className= {`PCPage ${className}`}>
        <div>
            {pageTitle && (
                <p className="PCPage__title">
                    {pageTitle}
                    <span className="PCPage__subtitle">{subTitle}</span>
                </p>
            )}
        </div>
        {isBackTop && (
            <div className="PCPage__backtop">
                <FloatButton.BackTop
                visibilityHeight={400}
                style={{
                    height: '48px',
                    width: '48px'
                }}
                type="default"
                className="PCPage__backtop-icon"
                icon={<VerticalAlignTopOutlined />}
                />
            </div>
        )}
    </div>)
}

export default React.memo(PCPage); 