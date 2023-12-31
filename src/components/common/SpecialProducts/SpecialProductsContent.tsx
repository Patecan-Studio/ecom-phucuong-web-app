"use client";

import React, { useState } from "react";
import { ProductsContentProps } from "../Products/types";
import ProductsSubContent from "../Products/ProductsSubContent";
import ProductsTitle from "../Products/ProductsTitle";
import ProductsGuide from "../Products/ProductsGuide";
import useQueryParams from "@/hooks/useQueryParams";

const SpecialProductsContent = ({
  productsTitle,
  products,
  totalPage,
}: ProductsContentProps) => {
  const { queryParams, setQueryParams } = useQueryParams<{
    sub_page: number;
  }>();
  const [selectedPage, setSelectedPage] = useState(
    Number(queryParams.get("sub_page")) || 1
  );
  const handlePrevClick = () => {
    if (selectedPage <= 1) return;
    setSelectedPage((prev) => prev - 1);
    setQueryParams({ sub_page: selectedPage - 1 });
  };
  const handleNextClick = () => {
    if (selectedPage >= totalPage) return;
    setSelectedPage((prev) => prev + 1);
    setQueryParams({ sub_page: selectedPage + 1 });
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

export default SpecialProductsContent;
