import React from "react";
import "./style.scss";
import ProductsContent from "./ProductsContent";

const getProducts = async (category: string) => {
  try {
    const response = await fetch(
      `${process.env.SITE_DOMAIN}/api/v1/products?category=${category}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const Products = async ({ category, productsTitle }: any) => {
  const data = await getProducts(category);

  return (
    <div className="products">
      <ProductsContent
        productsTitle={productsTitle ? productsTitle : "Sản Phẩm"}
        products={data.items}
      />
    </div>
  );
};

export default Products;
