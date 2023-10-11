import React from "react";

const ProductInfo = () => {
  const discount_price = (15000000).toLocaleString("vn", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const price = (20000000).toLocaleString("vn", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const priceClassName = discount_price
    ? "product__price--old"
    : "product__price";

  return (
    <div className="product__info">
      <div className="product__name">Ghế ăn elio - Tribú</div>
      {discount_price && <h4 className="product__price">{discount_price} đ</h4>}
      <h4 className={priceClassName}>{price} đ</h4>
    </div>
  );
};

export default ProductInfo;
