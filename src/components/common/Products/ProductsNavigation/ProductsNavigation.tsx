import React from "react";
import ProductsDotButton from "./ProductsDotButton";

const ProductsNavigation = ({ scrollSnaps, selected, onNavigate }: any) => {
  return (
    <div className="products__navigation">
      {scrollSnaps.map((snap: any, index: any) => (
        <ProductsDotButton
          key={snap}
          selected={index === selected}
          onClick={() => onNavigate(index)}
        />
      ))}
    </div>
  );
};

export default ProductsNavigation;
