import React from "react";
import { OverviewQuantityProps } from "./types";

const OverviewQuantity = ({ quantity }: any) => {
  const [amount, setAmount] = React.useState(1);

  const handleDecrease = () => {
    if (amount === 1) return;
    setAmount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (amount === quantity) return;
    setAmount((prev) => prev + 1);
  };

  return (
    <div className="overview__quantity">
      <h4 className="overview__quantity__title">SỐ LƯỢNG</h4>
      <div className="overview__quantity__input">
        <button
          className="overview__quantity__decrease"
          onClick={handleDecrease}
          disabled={quantity === 0 || amount === 0}
        ></button>
        <input
          className="overview__quantity__value"
          value={quantity === 0 ? 0 : amount}
          readOnly
        />
        <button
          className="overview__quantity__increase"
          onClick={handleIncrease}
          disabled={quantity === 0 || amount === quantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default OverviewQuantity;
