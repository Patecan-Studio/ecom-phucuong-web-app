import React from "react";
import ProductLogo from "./ProductLogo";
import ProductLinks from "./ProductLinks";
import { ProductFurtherInfoProps } from "../types";

const ProductFurtherInfo = ({ brandImage }: ProductFurtherInfoProps) => {
  return (
    <div className="product__further-info">
      <ProductLogo brandImage={brandImage}/>
      <ProductLinks />
    </div>
  );
};

export default ProductFurtherInfo;
