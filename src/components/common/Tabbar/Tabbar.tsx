import React from "react";
import "./style.scss";
import TabbarLogo from "./TabbarLogo";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import TabbarMenu from "./TabbarSearch/TabbarMenu";

const Tabbar = () => {
  return (
    <div className="tabbar-container">
      <nav className="tabbar">
        <TabbarLogo />
        <TabbarSearch />
        <TabbarMenu />
      </nav>
    </div>
  );
};

export default Tabbar;
