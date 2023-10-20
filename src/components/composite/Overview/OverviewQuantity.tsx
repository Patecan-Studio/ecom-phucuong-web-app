import React from "react";
import { OverviewQuantityProps } from "./types";

const OverviewQuantity = ({
  quantity,
  onDecrease,
  onIncrease,
  isIncreaseDisabled,
  isDecreasedDisable,
}: any) => {
  return (
    <div className="overview__quantity">
      <h4 className="overview__quantity__title">SỐ LƯỢNG</h4>
      <div className="overview__quantity__input">
        <button
          className="overview__quantity__decrease"
          onClick={onDecrease}
          disabled={isDecreasedDisable}
        ></button>
        <input
          className="overview__quantity__value"
          value={quantity}
          readOnly
        />
        <button
          className="overview__quantity__increase"
          onClick={onIncrease}
          disabled={isIncreaseDisabled}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default OverviewQuantity;
