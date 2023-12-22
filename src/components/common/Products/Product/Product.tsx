import React from "react";
import "./style.scss";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductFurtherInfo from "./ProductFurtherInfo";
import { ProductProps } from "../types";
import Link from "next/link";

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
      <Link className="product" href={`/products/${productSlug}`}>
        <ProductImage
          isNew={isNew}
          image={image}
          discountPercentage={discountPercentage}
        />
        <ProductInfo name={name} discountPrice={discountPrice} price={price} />
      </Link>
      <ProductFurtherInfo brandImage={brandImage} productSlug={productSlug} />
    </div>
  );
};

export default Product;
