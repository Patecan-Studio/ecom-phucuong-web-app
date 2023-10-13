import React from "react";
import ProductsNextButton from "./ProductsNextButton";
import ProductsPrevButton from "./ProductsPrevButton";
import { ProductsButtonsProps } from "../types";

const ProductsButtons = ({
  onPrevClick,
  onNextClick,
}: ProductsButtonsProps) => {
  return (
    <div className="products__buttons">
      <ProductsPrevButton onClick={onPrevClick} />
      <ProductsNextButton onClick={onNextClick} />
    </div>
  );
};

export default ProductsButtons;
