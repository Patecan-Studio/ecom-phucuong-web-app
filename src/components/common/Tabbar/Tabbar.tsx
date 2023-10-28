import React from "react";
import "./style.scss";
import TabbarLogo from "./TabbarLogo";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import TabbarMenu from "./TabbarMenu";
import TabbarSecondary from "./TabbarSecondary";

const Tabbar = () => {
  return (
    <div className="tabbar-container">
      <nav className="tabbar flex items-center justify-between">
        <TabbarLogo />
        <TabbarSearch />
        <TabbarMenu />
      </nav>
      <TabbarSecondary />
    </div>
  );
};

export default Tabbar;
