import React from "react";

const OverviewButtons = () => {
  return (
    <div className="overview__buttons">
      <button className="overview__button">MUA NGAY</button>
      <button className="overview__button">
        TRẢ GÓP 0% QUA THẺ
        <span>Visa, Mastercard, JCB</span>
      </button>
      <div className="overview__call">
        <p className="overview__call--bold">Gọi đặt mua</p>
        <a href="tel:+18001060" className="overview__call__number">
          1800.1060
        </a>
        <p>(8:00 - 17:30)</p>
      </div>
    </div>
  );
};

export default OverviewButtons;
