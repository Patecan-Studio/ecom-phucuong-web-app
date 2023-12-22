"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import ProductsContent from "./ProductsContent";
import { useBreakpoints } from "@/hooks/useBreakpoints";

const Products = ({ category, productsTitle, page, q }: any) => {
  const [data, setData] = useState<any>([]);
  const breakpoint = useBreakpoints();
  const currentPage = page ? page : 1;
  const totalPage = data?.total_page || 1;

  useEffect(() => {
    if (breakpoint === "xxl") {
      getProducts(category, 10, currentPage, q);
    }

    if (breakpoint === "xl") {
      getProducts(category, 8, currentPage, q);
    }

    if (breakpoint === "lg") {
      getProducts(category, 6, currentPage, q);
    }

    if (breakpoint === "md" || breakpoint === "sm" || breakpoint === "xs") {
      getProducts(category, 4, currentPage, q);
    }
  }, [breakpoint, category, currentPage, q]);

  const getProducts = async (
    category: string,
    pageSize: number,
    page: number,
    q: string
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?category=${
          category ? category : "all"
        }&page=${page}&page_size=${pageSize}&q=${q}&time=${new Date().getTime()}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="products">
      <ProductsContent
        productsTitle={productsTitle ? productsTitle : "Sản phẩm mới"}
        products={data.items}
        totalPage={totalPage}
      />
    </div>
  );
};

export default Products;
