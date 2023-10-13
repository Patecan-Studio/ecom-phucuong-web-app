import React from "react";
import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";
import { ProductsButtonProps } from "../types";

const ProductsNextButton = ({ onClick }: ProductsButtonProps) => {
  return (
    <button className="products__prev" onClick={onClick}>
      <ArrowLeftIcon />
    </button>
  );
};

export default ProductsNextButton;
