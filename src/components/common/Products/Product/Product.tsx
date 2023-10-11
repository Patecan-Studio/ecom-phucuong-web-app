import React from "react";
import "./style.scss";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductFurtherInfo from "./ProductFurtherInfo";

const Product = () => {
  return (
    <div className="product">
      <ProductImage />
      <ProductInfo />
      <ProductFurtherInfo />
    </div>
  );
};

export default Product;
