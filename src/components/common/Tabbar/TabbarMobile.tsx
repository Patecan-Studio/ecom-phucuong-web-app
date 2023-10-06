import React from "react";
import TabbarLogo from "./TabbarLogo";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import TabbarMenu from "./TabbarMenu";

const TabbarMobile = () => {
  return (
    <nav className="tabbar tabbar--mobile">
      <TabbarLogo />
      <TabbarSearch />
      <TabbarMenu />
    </nav>
  );
};

export default TabbarMobile;
