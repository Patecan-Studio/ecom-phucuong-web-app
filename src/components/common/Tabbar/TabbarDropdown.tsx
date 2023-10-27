import React from "react";
import { TabbarDropdownProps } from "./types";

const TabbarDropdown = ({ dropdownMenu }: TabbarDropdownProps) => {
  return (
    <div className="tabbar__dropdown">
      {dropdownMenu.map((item) => (
        <div className="tabbar__dropdown__item" key={item.label.name}>
          <div className="tabbar__dropdown__label hover:text-blue-500"><a href={`${item.label.path}`} key={item.label.name}>{item.label.name}</a></div>
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
