import React from "react";
import "./style.scss";
import TabbarLogo from "./TabbarLogo";
import TabbarSearch from "./TabbarSearch/TabbarSearch";

const Tabbar = () => {
  return (
    <div className="tabbar-container">
      <nav className="tabbar">
        <TabbarLogo />
        <TabbarSearch />
      </nav>
    </div>
  );
};

export default Tabbar;
