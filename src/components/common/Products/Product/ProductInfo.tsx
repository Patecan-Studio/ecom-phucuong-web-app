import React from "react";
import { ProductInfoProps } from "../types";
import { convertToCurrencyFormat } from "@/share/utils/utils";

const ProductInfo = ({ name, discountPrice, price }: ProductInfoProps) => {
  const formattedDiscountPrice = convertToCurrencyFormat(discountPrice);
  const formattedPrice = convertToCurrencyFormat(price);

  const priceClassName = formattedDiscountPrice
    ? "product__price product__price--old"
    : "product__price";

  return (
    <div className="product__info">
      <div className="product__name">{name}</div>
      {formattedDiscountPrice && (
        <h4 className="product__price">{formattedDiscountPrice} đ</h4>
      )}
      {formattedDiscountPrice !== formattedPrice ? (
        <h4 className={priceClassName}>{formattedPrice} đ</h4>
      ) : (
        <h4 className={priceClassName} style={{ color: "white" }}>
          {formattedPrice} đ
        </h4>
      )}
    </div>
  );
};

export default ProductInfo;
