import React from "react";
import TabbarLogo from "./TabbarLogo";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import TabbarMenu from "./TabbarMenu";
import TabbarSecondary from "./TabbarSecondary";

const TabbarDesktop = () => {
  return (
    <>
      <nav className="tabbar tabbar--desktop">
        <TabbarLogo />
        <TabbarSearch />
        <TabbarMenu />
      </nav>
      <TabbarSecondary />
    </>
  );
};

export default TabbarDesktop;
