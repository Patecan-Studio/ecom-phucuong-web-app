import React from "react";
import { ProductStatusProps } from "../types";

const ProductStatus = ({ isNew, discountPercentage }: ProductStatusProps) => {
  return (
    <div className="product__status">
      {isNew && <p className="product__status--label">Mới</p>}
      {discountPercentage != 0 && (
        <p className="product__status--discount">{`- ${discountPercentage}%`}</p>
      )}
    </div>
  );
};

export default ProductStatus;
