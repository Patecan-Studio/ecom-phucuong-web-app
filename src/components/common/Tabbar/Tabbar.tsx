import React from "react";
import "./style.scss";
import TabbarLogo from "./TabbarLogo";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import TabbarMenu from "./TabbarSearch/TabbarMenu";
import TabbarSecondary from "./TabbarSearch/TabbarSecondary";

const Tabbar = () => {
  return (
    <div className="tabbar-container">
      <nav className="tabbar">
        <TabbarLogo />
        <TabbarSearch />
        <TabbarMenu />
      </nav>
      <TabbarSecondary />
    </div>
  );
};

export default Tabbar;
