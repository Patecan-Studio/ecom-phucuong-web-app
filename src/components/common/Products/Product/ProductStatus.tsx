import React from "react";

const ProductStatus = () => {
  return (
    <div className="product__status">
      <p className="product__status--label">Mới</p>
      <p className="product__status--discount">{`- ${`12%`}`}</p>
    </div>
  );
};

export default ProductStatus;
