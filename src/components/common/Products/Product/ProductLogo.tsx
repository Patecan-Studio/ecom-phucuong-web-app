import React from "react";
import NextImage from "next/image";
import { ProductLogoProps } from "../types";

const ProductLogo = ({ brandImage }: ProductLogoProps) => {
  return (
    <div className="product__logo">
      <NextImage
        src={brandImage}
        alt="Picture of the author"
        fill
      />
    </div>
  );
};

export default ProductLogo;
