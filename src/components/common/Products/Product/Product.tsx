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
  discountPercentage,
  discountPrice,
  isNew,
  brandImage,
  productSlug,
}: ProductProps) => {
  return (
    <div className="product-container">
      <div className="product">
        <ProductImage
          isNew={isNew}
          image={image}
          discountPercentage={discountPercentage}
          productSlug={productSlug}
        />
        <ProductInfo name={name} discountPrice={discountPrice} price={price} />
        <ProductFurtherInfo brandImage={brandImage} />
      </div>
    </div>
  );
};

export default Product;
