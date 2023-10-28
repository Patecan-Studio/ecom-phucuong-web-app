import React from "react";
import { TabbarMenuItemProps } from "./types";

const TabbarMenuItem = ({
  className,
  label,
  count,
  icon,
}: TabbarMenuItemProps) => {
  return (
    <div className={`tabbar__menu__item ${className}` } key={label}>
      {count ? (
        <>
          <div className="tabbar__menu__icon">
            {icon}
            <p className="tabbar__menu__count">{count}</p>
          </div>
          <div className="tabbar__menu__text">{label}</div>
        </>
      ) : (
        <>
          <div className="tabbar__menu__icon">{icon}</div>
          <div className="tabbar__menu__text">{label}</div>
        </>
      )}
    </div>
  );
};

export default TabbarMenuItem;
