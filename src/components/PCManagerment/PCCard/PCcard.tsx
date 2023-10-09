import React from "react";
import "./PCCard.scss"
import { Row, Col } from "antd";

type PCCardProps = React.PropsWithChildren<{
    className?: string;
    cardTitle?: string;
    suffix?: any | React.ReactNode;
    id?: string;
}>;

const PCCard: React.FC<PCCardProps> = ({
    className,
    cardTitle,
    children,
    suffix,
    id
}) => {
    return (
    <div id={id} className={`pc-card ${className ?? ""}`}>
        <Row gutter={[16,16]}>
            {suffix ? (
                <>
                    <Col span={4}>
                        <p className="pc-card__title">{cardTitle}</p>
                    </Col>
                    {suffix}
                </>
            ) : (
                <Col span={24}>
                    <p className="pc-card__title">{cardTitle}</p>
                </Col>
            )}
        </Row>
        <div className="pc-card__body">{children}</div>
    </div>)
}

export default PCCard;