"use client";

import React, { useEffect, useState } from "react";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import SpecialProductsContent from "./SpecialProductsContent";

const SpecialProducts = ({ productsTitle, page }: any) => {
  const [data, setData] = useState<any>({});
  const breakpoint = useBreakpoints();
  const currentPage = page ? page : 1;
  const totalPage = data.total_page;

  useEffect(() => {
    if (breakpoint === "xxl") {
      getProducts(currentPage, 10);
    }

    if (breakpoint === "xl") {
      getProducts(currentPage, 8);
    }

    if (breakpoint === "lg") {
      getProducts(currentPage, 6);
    }

    if (breakpoint === "md" || breakpoint === "sm" || breakpoint === "xs") {
      getProducts(currentPage, 4);
    }
  }, [breakpoint, currentPage]);

  const getProducts = async (page: number, pageSize: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?
        }&page=${page}&page_size=50&time=${new Date().getTime()}`
      );
      const jsonData = await response.json();
      const randomProducts = jsonData.items
        .sort(() => Math.random() - Math.random())
        .slice(0, pageSize);
      setData({
        ...jsonData,
        items: [...randomProducts],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="products">
      <SpecialProductsContent
        productsTitle={productsTitle ? productsTitle : "Sản phẩm bán chạy"}
        products={data.items}
        totalPage={totalPage}
      />
    </div>
  );
};

export default SpecialProducts;
