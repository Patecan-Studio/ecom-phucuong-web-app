import React from 'react'

const ProductsDotButton = ({ selected, onClick }: any) => (
  <button
    className={`products__dot ${selected ? "products__dot--selected" : ""}`}
    type="button"
    onClick={onClick}
  ></button>
)

export default ProductsDotButton