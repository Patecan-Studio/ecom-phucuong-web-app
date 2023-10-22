import React from "react";
import "./style.scss";
import ProductsContent from "./ProductsContent";

const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.SITE_DOMAIN}/api/v1/products`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const Products = async () => {
  const data = await getProducts();

  return (
    <div className="products">
      <ProductsContent products={data.items} />
    </div>
  );
};

export default Products;
