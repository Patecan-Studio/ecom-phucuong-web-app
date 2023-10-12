import React from "react";
import ArrowRightIcon from "../../Icons/ArrowRightIcon";
import { ProductsButtonProps } from "../types";

const ProductsNextButton = ({ onClick }: ProductsButtonProps) => {
  return (
    <button className="products__next" onClick={onClick}>
      <ArrowRightIcon />
    </button>
  );
};

export default ProductsNextButton;
