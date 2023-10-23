"use client";

import React, { useState } from "react";
import { ProductsContentProps } from "./types";
import ProductsSubContent from "./ProductsSubContent";
import ProductsTitle from "./ProductsTitle";
import ProductsButtons from "./ProductsButtons/ProductsButtons";
import ProductsNavigation from "./ProductsNavigation/ProductsNavigation";
import ProductsGuide from "./ProductsGuide";
import useQueryParams from "@/hooks/useQueryParams";

const ProductsContent = ({ productsTitle, products, totalPage }: ProductsContentProps) => {
  const { queryParams, setQueryParams } = useQueryParams<{ page: number }>();
  const [selectedPage, setSelectedPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const handlePrevClick = () => {
    if (selectedPage === 1) return;
    setSelectedPage((prev) => prev - 1);
    setQueryParams({ page: selectedPage - 1 });
  };
  const handleNextClick = () => {
    if (selectedPage === products.length - 1) return;
    setSelectedPage((prev) => prev + 1);
    setQueryParams({ page: selectedPage + 1 });
  };
  const handleSelect = (page: number) => {
    setSelectedPage(page);
    setQueryParams({ page });
  };

  return (
    <div className="products__content">
      <div className="products__content--top">
        <ProductsTitle title={productsTitle} />
        <ProductsButtons
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>
      {products.length ? (
        <ProductsSubContent products={products} />
      ) : (
        <h2>Hiện chưa có sản phẩm</h2>
      )}
      <ProductsNavigation
        selected={selectedPage}
        onNavigate={handleSelect}
        totalPage={totalPage}
      />
      <ProductsGuide />
    </div>
  );
};

export default ProductsContent;
