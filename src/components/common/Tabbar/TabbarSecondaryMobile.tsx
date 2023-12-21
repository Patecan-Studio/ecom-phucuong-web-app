"use client";
import React, { useState } from "react";
import TabbarDropdown from "./TabbarDropdown";
import Link from "next/link";

const TabbarSecondaryMobile = ({ menu, checkExternalLink }: any) => {
  const [mobileMenu, setMobileMenu] = useState(
    menu.map((item: any) => {
      if (item.dropdownMenu) {
        return { ...item, isOpen: false };
      }
      return item;
    })
  );

  const toggleDropdown = (index: number) => {
    const newMobileMenu = [...mobileMenu];
    newMobileMenu[index].isOpen = !newMobileMenu[index].isOpen;
    setMobileMenu(newMobileMenu);
  };

  return (
    <div className="tabbar--secondaryMobile">
      {mobileMenu.map((item: any, index: number) => (
        <>
          <div key={item.label} className="tabbar--secondaryMobile__item">
            {checkExternalLink(item.path) ? (
              <a
                className="tabbar--secondaryMobile__link"
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                className={`tabbar--secondaryMobile__link ${
                  item.isOpen ? "active" : ""
                }`}
                href={item.path}
              >
                {item.label}
              </Link>
            )}
            {!checkExternalLink(item.path) && (
              <button
                className={`tabbar--secondaryMobile__button ${
                  item.isOpen ? "active" : ""
                }`}
                onClick={() => toggleDropdown(index)}
              ></button>
            )}
          </div>
          {item.dropdownMenu && item?.isOpen && (
            <TabbarDropdown dropdownMenu={item.dropdownMenu} />
          )}
        </>
      ))}
    </div>
  );
};

export default TabbarSecondaryMobile;
