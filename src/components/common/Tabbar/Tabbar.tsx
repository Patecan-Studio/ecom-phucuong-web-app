import React from "react";
import "./style.scss";
import TabbarDesktop from "./TabbarDesktop";
import TabbarMobile from "./TabbarMobile";

const Tabbar = () => {
  return (
    <div className="tabbar-container">
      <TabbarDesktop />
      <TabbarMobile />
    </div>
  );
};

export default Tabbar;
