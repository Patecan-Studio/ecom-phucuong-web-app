"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import ProductsContent from "./ProductsContent";
import { useBreakpoints } from "@/hooks/useBreakpoints";

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
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Products = ({ category, productsTitle, page, q }: any) => {
  const [data, setData] = useState<any>([]);
  const breakpoint = useBreakpoints();
  const currentPage = page ? page : 1;
  const totalPage = data?.total_page || 1;

  useEffect(() => {
    let pageSize = 10;

    if (breakpoint === "xl") {
      pageSize = 8;
    }

    if (breakpoint === "lg") {
      pageSize = 6;
    }

    if (breakpoint === "md" || breakpoint === "sm" || breakpoint === "xs") {
      pageSize = 4;
    }

    const getData = async () => {
      const data = await getProducts(category, pageSize, currentPage, q);
      setData(data);
    };

    getData();
  }, [breakpoint, category, currentPage, q]);

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
