import React from "react";
import "./style.scss";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductFurtherInfo from "./ProductFurtherInfo";
import { ProductProps } from "../types";

const Product = ({
  name,
  image,
  price,
  discountRatio,
  discountPrice,
  isNew,
  brandImage,
}: ProductProps) => {
  return (
    <div className="product">
      <ProductImage isNew={isNew} image={image} discountRatio={discountRatio} />
      <ProductInfo name={name} discountPrice={discountPrice} price={price} />
      <ProductFurtherInfo brandImage={brandImage} />
    </div>
  );
};

export default Product;
