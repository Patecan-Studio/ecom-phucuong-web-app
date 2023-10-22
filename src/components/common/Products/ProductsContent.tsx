"use client";

import React, { useState } from "react";
import { ProductsContentProps } from "./types";
import ProductsSubContent from "./ProductsSubContent";
import useEmblaCarousel from "embla-carousel-react";
import ProductsTitle from "./ProductsTitle";
import ProductsButtons from "./ProductsButtons/ProductsButtons";
import ProductsNavigation from "./ProductsNavigation/ProductsNavigation";
import ProductsGuide from "./ProductsGuide";

const ProductsContent = ({ productsTitle, products }: ProductsContentProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [contentRef, contentMethods] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  contentMethods?.on("select", () => {
    setSelectedIndex(contentMethods.selectedScrollSnap());
  });

  const handlePrevClick = () => {
    contentMethods?.scrollPrev();
    setSelectedIndex((index) =>
      index === 0
        ? (contentMethods?.scrollSnapList() || []).length - 1
        : index - 1
    );
  };

  const handleNextClick = () => {
    contentMethods?.scrollNext();
    setSelectedIndex((index) =>
      index === (contentMethods?.scrollSnapList() || []).length - 1
        ? 0
        : index + 1
    );
  };

  const handleNavigate = (index: number) => {
    contentMethods?.scrollTo(index);
    setSelectedIndex(index);
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
        <ProductsSubContent products={products} productsRef={contentRef} />
      ) : (
        <h2>Hiện chưa có sản phẩm</h2>
      )}
      <ProductsNavigation
        scrollSnaps={contentMethods?.scrollSnapList() || []}
        selected={selectedIndex}
        onNavigate={handleNavigate}
      />
      <ProductsGuide />
    </div>
  );
};

export default ProductsContent;
