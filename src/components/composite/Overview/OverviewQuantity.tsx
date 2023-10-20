import React from "react";
import { OverviewQuantityProps } from "./types";

const OverviewQuantity = ({
  quantity,
  onDecrease,
  onIncrease,
  isDisabled
}: any) => {
  return (
    <div className="overview__quantity">
      <h4 className="overview__quantity__title">SỐ LƯỢNG</h4>
      <div className="overview__quantity__input">
        <button
          className="overview__quantity__decrease"
          onClick={onDecrease}
          disabled={isDisabled}
        ></button>
        <input
          className="overview__quantity__value"
          value={quantity}
          readOnly
        />
        <button
          className="overview__quantity__increase"
          onClick={onIncrease}
          disabled={isDisabled}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default OverviewQuantity;
