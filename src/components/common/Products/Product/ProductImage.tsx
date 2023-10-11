import React from "react";
import NextImage from "next/image";
import ProductStatus from "./ProductStatus";

const ProductCardImage = () => {
  return (
    <div className="product__image-container">
      <a href="#" className="product__image">
        <NextImage
          src="/images/product-images/product-1.jpg"
          alt="Picture of the author"
          width={0}
          height={0}
          sizes="100vw"
        />
        <ProductStatus />
      </a>
    </div>
  );
};

export default ProductCardImage;
