import React from "react";
import ProductsDotButton from "./ProductsDotButton";

const ProductsNavigation = ({ selected, onNavigate, totalPage }: any) => {
  const pageArray = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div className="products__navigation">
      <div className="products__navigation__wrapper">
        {pageArray.map((_, index: number) => (
          <ProductsDotButton
            key={index}
            selected={index + 1 === selected}
            value={index + 1}
            onClick={() => onNavigate(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsNavigation;
