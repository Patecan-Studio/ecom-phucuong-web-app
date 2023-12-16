import React, { useState } from "react";

const TabbarBurger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`tabbar__burger ${isActive && "tabbar__burger--active"}`}
      onClick={handleClick}
    >
      <div className="tabbar__burger__line"></div>
      <div className="tabbar__burger__line"></div>
      <div className="tabbar__burger__line"></div>
    </div>
  );
};

export default TabbarBurger;
