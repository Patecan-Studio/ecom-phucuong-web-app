import React from "react";
import { ProductsTitleProps } from "./types";

const ProductsTitle = ({ title }: ProductsTitleProps) => {
  return <h2 className="products__title">{title}</h2>;
};

export default ProductsTitle;
