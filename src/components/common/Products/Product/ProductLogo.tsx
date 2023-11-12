import React from "react";
import NextImage from "next/image";
import { ProductLogoProps } from "../types";
import Link from "next/link";

const ProductLogo = ({ brandImage }: ProductLogoProps) => {
  return (
    <Link className="product__logo" href="/">
      <NextImage
        src={brandImage}
        alt="Picture of the author"
        fill
      />
    </Link>
  );
};

export default ProductLogo;
