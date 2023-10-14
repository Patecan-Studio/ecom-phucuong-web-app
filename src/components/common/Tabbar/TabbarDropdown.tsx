import React from "react";
import { TabbarDropdownProps } from "./types";

const TabbarDropdown = ({ dropdownMenu }: TabbarDropdownProps) => {
  return (
    <div className="tabbar__dropdown">
      {dropdownMenu.map((item) => (
        <div className="tabbar__dropdown__item" key={item.label}>
          <div className="tabbar__dropdown__label">{item.label}</div>
          <div className="tabbar__dropdown__list">
            {item.list.map((subItem) => (
              <a href={subItem.path} key={subItem.name}>
                {subItem.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabbarDropdown;
