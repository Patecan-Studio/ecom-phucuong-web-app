"use client";
import React from "react";
import TabbarDropdown from "./TabbarDropdown";
import Link from "next/link";

const TabbarSecondary = ({ menu, checkExternalLink }: any) => {
  return (
    <div className="tabbar--secondary-container">
      <div className="tabbar--secondary">
        {menu.map((item: any) => (
          <div key={item.label}>
            <div className="tabbar--secondary__item">
              {checkExternalLink(item.path) ? (
                <a
                  className="tabbar--secondary__link tracking-tight"
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className="tabbar--secondary__link tracking-tight"
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
    </div>
  );
};

export default TabbarSecondary;
