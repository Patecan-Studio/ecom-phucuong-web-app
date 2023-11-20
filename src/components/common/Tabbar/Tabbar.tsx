import React from "react";
import "./style.scss";
import TabbarLogo from "./TabbarLogo";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import TabbarMenu from "./TabbarMenu";
import TabbarSecondary from "./TabbarSecondary";

const Tabbar = ({ isSecondaryMenu = true }: any) => {
  return (
    <div className="tabbar-container">
      <nav
        className="tabbar flex items-center justify-between"
        style={{ border: isSecondaryMenu && "none" }}
      >
        <TabbarLogo />
        <TabbarSearch />
        <TabbarMenu />
      </nav>
      {isSecondaryMenu && <TabbarSecondary />}
    </div>
  );
};

export default Tabbar;
