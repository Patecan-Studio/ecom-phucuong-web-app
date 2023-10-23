import React from "react";
import ProductsDotButton from "./ProductsDotButton";

const ProductsNavigation = ({ selected, onNavigate, totalPage }: any) => {
  const pageArray = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div className="products__navigation">
      {pageArray.map((item: any, index: any) => (
        <ProductsDotButton
          key={item._id}
          selected={index + 1 === selected}
          value={index + 1}
          onClick={() => onNavigate(index + 1)}
        />
      ))}
    </div>
  );
};

export default ProductsNavigation;
