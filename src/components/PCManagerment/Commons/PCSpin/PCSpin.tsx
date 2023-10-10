import React, { useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./PCSpin.scss";
import { debounce } from "lodash";

const PCSpin: React.FC = () => {
    useEffect(() => {
        const bodyTagElm = document.querySelector("body");
        const clearClassNode = debounce((element: HTMLElement | null) => {
            if (element) {
                element.classList.remove("overlay-loading");
            }
        }, 150);

        if (bodyTagElm) {
            bodyTagElm.classList.add("overlay-loading")
        }

        return () => {
            clearClassNode(bodyTagElm);
        }

    }, []);

    return (
        <div className="pc-con-spin">
            <div className="pc-box-overlay"></div>
            <div className="pc-box-icon">
                <Spin className="icon-loading" indicator={<LoadingOutlined spin />} />
            </div>
        </div>
    );
};

export default React.memo(PCSpin);
