import React from "react";
import NextImage from "next/image";
import ProductStatus from "./ProductStatus";
import { ProductImageProps } from "../types";

const ProductImage = ({isNew, image, discountRatio}: ProductImageProps) => {
  return (
    <div className="product__image-container">
      <a href="#" className="product__image">
        <NextImage
          src={image}
          alt="Picture of the author"
          width={0}
          height={0}
          sizes="100vw"
        />
        {isNew && <ProductStatus discountRatio={10} />}
      </a>
    </div>
  );
};

export default ProductImage;
