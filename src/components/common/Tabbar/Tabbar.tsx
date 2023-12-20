import React from "react";
import "./style.scss";
import TabbarLogo from "./TabbarLogo";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import TabbarMenu from "./TabbarMenu";
import TabbarSecondary from "./TabbarSecondary";

const Tabbar = ({ logoUrl }: any) => {
  return (
    <div className="tabbar-container">
      <div className="tabbar flex items-center justify-between">
        <TabbarLogo logoUrl={logoUrl} />
        <TabbarSearch />
        <TabbarMenu />
      </div>
      <TabbarSecondary />
    </div>
  );
};

export default Tabbar;
