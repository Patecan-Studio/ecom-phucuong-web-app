import React from "react";
import "./style.scss";
import ProductsContent from "./ProductsContent";

const getProducts = async (
  category: string,
  page: number,
  pageSize: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?
        category=${category ? category : "all"}
        &page=${page}
        &page_size=${pageSize}
      `
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Products = async ({ category, productsTitle, page, pageSize }: any) => {
  const currentPage = page ? page : 1;
  const data = await getProducts(category, currentPage, pageSize);
  const totalPage = data.total_page;
  return (
    <div className="products">
      <ProductsContent
        productsTitle={productsTitle ? productsTitle : "Sản Phẩm"}
        products={data.items}
        totalPage={totalPage}
      />
    </div>
  );
};

export default Products;
