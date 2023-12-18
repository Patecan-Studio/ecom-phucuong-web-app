import React from "react";
import ProductLogo from "./ProductLogo";
import ProductLinks from "./ProductLinks";
import { ProductFurtherInfoProps } from "../types";

const ProductFurtherInfo = ({ brandImage, productSlug }: ProductFurtherInfoProps) => {
  return (
    <div className="product__further-info">
      <ProductLogo brandImage={brandImage}/>
      <ProductLinks productSlug={productSlug} />
    </div>
  );
};

export default ProductFurtherInfo;
