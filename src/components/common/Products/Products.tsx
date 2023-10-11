import React from "react";
import "./style.scss";
import ProductsTitle from "./ProductsTitle";
import ProductsContent from "./ProductsContent";

const Products = () => {
  return (
    <div className="products">
      <ProductsTitle title="Sản phẩm mới" />
      <ProductsContent />
    </div>
  );
};

export default Products;
