"use client";

import React from "react";
import "./style.scss";
import ProductsContent from "./ProductsContent";
import { useSearchParams } from "next/navigation";

const getProducts = async (
  category: string,
  page: number
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?
        category=${category ? category : "all"}
        &page=${page}
        &page_size=8
      `
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Products = async ({ category, productsTitle }: any) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const data = await getProducts(category, page);
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
