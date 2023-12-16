"use client";
import React from "react";
import TabbarDropdown from "./TabbarDropdown";
import Link from "next/link";

const TabbarSecondaryMobile = ({ menu, checkExternalLink }: any) => {
  return (
    <div className="tabbar--secondaryMobile">
      {menu.map((item: any) => (
        <div key={item.label}>
          <div className="tabbar--secondaryMobile__item">
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
                className="tabbar--secondaryMobile__link"
                href={item.path}
              >
                {item.label}
              </Link>
            )}
          </div>
          {item.dropdownMenu && (
            <TabbarDropdown dropdownMenu={item.dropdownMenu} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabbarSecondaryMobile;
