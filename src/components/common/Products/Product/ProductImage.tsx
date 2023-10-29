import React from "react";
import NextImage from "next/image";
import ProductStatus from "./ProductStatus";
import { ProductImageProps } from "../types";
import Link from "next/link";

const ProductImage = ({
  isNew,
  image,
  discountPercentage,
  productSlug,
}: ProductImageProps) => {
  return (
    <div className="product__image-container">
      <Link href={`/products/${productSlug}`} className="product__image">
        {/* <a className="product__image"> */}
        <NextImage
          src={image}
          alt="Picture of the author"
          width={0}
          height={0}
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
        />
        <ProductStatus isNew={isNew} discountPercentage={discountPercentage} />
        {/* </a> */}
      </Link>
    </div>
  );
};

export default ProductImage;
