import React from "react";
import { ProductStatusProps } from "../types";

const ProductStatus = ({ isNew, discountRatio }: ProductStatusProps) => {
  return (
    <div className="product__status">
      {isNew && <p className="product__status--label">Mới</p>}
      <p className="product__status--discount">{`- ${discountRatio * 100}%`}</p>
    </div>
  );
};

export default ProductStatus;
