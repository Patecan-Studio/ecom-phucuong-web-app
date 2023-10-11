import React from "react";
import "./style.scss";
import ProductsTitle from "./ProductsTitle";
import ProductsContent from "./ProductsContent";
import { useProducts } from "@/hooks/useProducts";

const Products = () => {
  const products = useProducts();

  return (
    <div className="products">
      <ProductsTitle title="Sản phẩm mới" />
      <ProductsContent products={products} />
    </div>
  );
};

export default Products;
