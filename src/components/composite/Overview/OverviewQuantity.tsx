import React from "react";

const OverviewQuantity = () => {
  return (
    <div className="overview__quantity">
      <h4 className="overview__quantity__title">SỐ LƯỢNG</h4>
      <div className="overview__quantity__input">
        <button className="overview__quantity__decrease"></button>
        <input className="overview__quantity__value" value="1" />
        <button className="overview__quantity__increase">+</button>
      </div>
    </div>
  );
};

export default OverviewQuantity;
