"use client";

import React from "react";
import { ProductsContentProps } from "./types";
import ProductsSubContent from "./ProductsSubContent";
import useEmblaCarousel from "embla-carousel-react";
import ProductsTitle from "./ProductsTitle";

const ProductsContent = ({ products }: ProductsContentProps) => {
  const half = Math.ceil(products.length / 2);
  const firstHalf = products.slice(0, half);
  const secondHalf = products.slice(half, products.length);

  const [firstHalfRef, firstHalfMethods] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 2,
  })

  const [secondHalfRef, secondHalfMethods] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 2,
  })

  const handlePrevClick = () => {
    firstHalfMethods?.scrollPrev();
    secondHalfMethods?.scrollPrev();
  }

  const handleNextClick = () => {
    firstHalfMethods?.scrollNext();
    secondHalfMethods?.scrollNext();
  }



  return (
    <div className="products__content">
      <ProductsTitle title="Sản phẩm mới" />
      {/* <ProductButtons /> */}
      <ProductsSubContent
        products={firstHalf}
        className="products__content--first"
        productsRef={firstHalfRef}
      />
      <ProductsSubContent
        products={secondHalf}
        className="products__content--second"
        productsRef={secondHalfRef}
      />
    </div>
  );
};

export default ProductsContent;
