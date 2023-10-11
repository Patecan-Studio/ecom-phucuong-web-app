import React from "react";
import "./style.scss";
import ProductCardImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductCard = () => {
  return (
    <div className="product">
      <ProductCardImage />
      <ProductInfo />
    </div>
  );
};

export default ProductCard;
