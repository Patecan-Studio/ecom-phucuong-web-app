"use client";

import React, { useState } from "react";
import { ProductsContentProps } from "./types";
import ProductsSubContent from "./ProductsSubContent";
import ProductsTitle from "./ProductsTitle";
import ProductsGuide from "./ProductsGuide";
import useQueryParams from "@/hooks/useQueryParams";

const ProductsContent = ({
  productsTitle,
  products,
  totalPage,
}: ProductsContentProps) => {
  const { queryParams, setQueryParams } = useQueryParams<{ page: number }>();
  const [selectedPage, setSelectedPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const handlePrevClick = () => {
    if (selectedPage <= 1) return;
    setSelectedPage((prev) => prev - 1);
    setQueryParams({ page: selectedPage - 1 });
  };
  const handleNextClick = () => {
    if (selectedPage >= totalPage) return;
    setSelectedPage((prev) => prev + 1);
    setQueryParams({ page: selectedPage + 1 });
  };

  if (products?.length === 0) return <h2>Hiện tại không có sản phẩm này</h2>;

  return (
    <div className="products__content">
      <div className="products__content--top">
        <ProductsTitle title={productsTitle} />
      </div>
      {(products?.length || 0) >= 1 ? (
        <ProductsSubContent
          products={products}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      ) : (
        <img src="/images/load.gif" alt="loading..." />
      )}
      <ProductsGuide />
    </div>
  );
};

export default ProductsContent;
