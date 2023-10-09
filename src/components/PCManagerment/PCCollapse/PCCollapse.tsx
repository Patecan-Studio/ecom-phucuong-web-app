import React from "react"
import "./PCCollapse.scss"
import { Collapse, CollapsePanelProps, CollapseProps } from "antd";

interface CollapsePanelModel {
    header: string | React.ReactNode;
    key: string;
    children: React.ReactNode;
}

type PCCollapseProps = {
    defaultActiveKey?: string;
    collapsePanels: CollapsePanelModel[];
    collapseRestProps?: Omit<CollapseProps, "defaultActiveKey">;
    panelRestProps?: Omit<CollapsePanelProps, "header" | "key">
}

const PCCollapse: React.FC<PCCollapseProps> = ({
    defaultActiveKey,
    collapsePanels,
    collapseRestProps,
    panelRestProps,
}: PCCollapseProps) => {
    return (
    <Collapse
    className="pc-collapse"
    defaultActiveKey={defaultActiveKey}
    collapsible="icon"
    {...collapseRestProps}>
        {collapsePanels.map((collapse: CollapsePanelModel) => (
            <>
                <Collapse.Panel
                    header={collapse.header}
                    key={collapse.key}
                    {...panelRestProps}
                >
                    {collapse.children}
                </Collapse.Panel>
            </>
        ))}
    </Collapse>)
}

export default PCCollapse;