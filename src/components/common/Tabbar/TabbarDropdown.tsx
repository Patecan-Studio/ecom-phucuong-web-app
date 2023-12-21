"use client"

import React from "react";
import { TabbarDropdownProps } from "./types";
import Link from "next/link";

const TabbarDropdown = ({ dropdownMenu, onBurgerClose }: TabbarDropdownProps) => {
  return (
    <div className="tabbar__dropdown">
      {dropdownMenu.map((item) => (
        <div className="tabbar__dropdown__item" key={item.label.name}>
          <div className="tabbar__dropdown__label hover:text-blue-500">
            {item.label.path.startsWith("http") ? (
              <a
                href={`${item.label.path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label.name}
              </a>
            ) : (
              <Link href={`${item.label.path}`}
                onClick={onBurgerClose}
              >{item.label.name}</Link>
            )}
          </div>
          <div className="tabbar__dropdown__list">
            {item.list.map((subItem) =>
              subItem.path.startsWith("http") ? (
                <a
                  href={`${subItem.path}`}
                  className="tabbar__dropdown__list__item hover:text-blue-500"
                  key={subItem.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {subItem.name}
                </a>
              ) : (
                <Link
                  href={`${subItem.path}`}
                  key={subItem.name}
                  className="tabbar__dropdown__list__item hover:text-blue-500"
                  onClick={onBurgerClose}
                >
                  {subItem.name}
                </Link>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabbarDropdown;
