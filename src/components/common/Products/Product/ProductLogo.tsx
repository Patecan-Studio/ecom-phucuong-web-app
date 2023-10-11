import React from "react";
import NextImage from "next/image";

const ProductLogo = () => {
  return (
    <a className="product__logo" href="#">
      <NextImage
        src="/images/product-images/caesar-logo.png"
        alt="Picture of the author"
        width={0}
        height={0}
        sizes="100vw"
      />
    </a>
  );
};

export default ProductLogo;
