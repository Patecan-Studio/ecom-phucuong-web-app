import React from "react";

const ProductsDotButton = ({ value, selected, onClick }: any) => (
  <button
    className={`products__dot ${selected ? "products__dot--selected" : ""}`}
    type="button"
    onClick={onClick}
  >
    {value}
  </button>
);

export default ProductsDotButton;
