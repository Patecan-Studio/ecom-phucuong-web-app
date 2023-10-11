import React from "react";
import { ProductStatusProps } from "../types";

const ProductStatus = ({ discountRatio }: ProductStatusProps) => {
  return (
    <div className="product__status">
      <p className="product__status--label">Mới</p>
      <p className="product__status--discount">{`- ${discountRatio}%`}</p>
    </div>
  );
};

export default ProductStatus;
