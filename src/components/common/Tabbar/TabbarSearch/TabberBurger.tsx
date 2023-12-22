import React, { useState } from "react";

const TabbarBurger = ({ isActive, onClick }: any) => {
  return (
    <div
      className={`tabbar__burger ${isActive && "tabbar__burger--active"}`}
      onClick={onClick}
    >
      <div className="tabbar__burger__line"></div>
      <div className="tabbar__burger__line"></div>
      <div className="tabbar__burger__line"></div>
    </div>
  );
};

export default TabbarBurger;
