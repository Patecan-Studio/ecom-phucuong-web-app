import React from "react";
import { OverviewInfoProps } from "./types";
import { convertToCurrencyFormat } from "@/share/utils/utils";

const OverviewInfo = ({
  name,
  price,
  discountPrice,
  discountPercentage,
  productCode,
  brand,
  quantity,
}: OverviewInfoProps) => {
  return (
    <div className="overview__info">
      <h1 className="overview__name">{name}</h1>
      <div className="overview__prices">
        <div className="overview__discountPrice">
          {convertToCurrencyFormat(discountPrice)} đ
          <div className="overview__discountPercentage">
            Tiết kiệm: <span>{discountPercentage}%</span>
          </div>
        </div>
        <div className="overview__price">
          Giá niêm _price--old: {price}
          {convertToCurrencyFormat(price)} đ
        </div>
      </div>
      <div className="overview__identify">
        <div className="overview__code">
          Mã sản phẩm: <span>{productCode}</span>
        </div>
        <div className="overview__brand">
          Thương hiệu: <span>{brand}</span>
        </div>
      </div>
      <div className="overview__quantity--info">
        Số lượng còn lại: {quantity}
      </div>
    </div>
  );
};

export default OverviewInfo;
