"use client";

import React from "react";
import { ProductsContentProps } from "./types";
import ProductsSubContent from "./ProductsSubContent";
import useEmblaCarousel from "embla-carousel-react";
import ProductsTitle from "./ProductsTitle";
import ProductsButtons from "./ProductsButtons/ProductsButtons";

const ProductsContent = ({ products }: ProductsContentProps) => {
  const [contentRef, contentMethods] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const handlePrevClick = () => {
    contentMethods?.scrollPrev();
  };

  const handleNextClick = () => {
    contentMethods?.scrollNext();
  };

  return (
    <div className="products__content">
      <div className="products__content--top">
        <ProductsTitle title="Sản phẩm mới" />
        <ProductsButtons
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>
      <ProductsSubContent products={products} productsRef={contentRef} />
    </div>
  );
};

export default ProductsContent;
