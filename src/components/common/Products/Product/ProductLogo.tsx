import React from "react";
import NextImage from "next/image";
import { ProductLogoProps } from "../types";

const ProductLogo = ({brandImage}: ProductLogoProps) => {
  return (
    <a className="product__logo" href="#">
      <NextImage
        src={brandImage}
        alt="Picture of the author"
        width={0}
        height={0}
        sizes="100vw"
      />
    </a>
  );
};

export default ProductLogo;
