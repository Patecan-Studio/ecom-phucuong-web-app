"use client";
import React, { useRef, useState } from "react";
import ProductsTitle from "@/components/common/Products/ProductsTitle";
import ProductsButtons from "@/components/common/Products/ProductsButtons/ProductsButtons";
import CategoryCard from "@/components/common/CategorySlider/CategoryCard";
import "./styles.scss";

const CategorySlider = ({ data }: any) => {
  const categories = (data || []).map((item: any) => ({
    label: item.display_text,
    imageUrl: item.image_url,
    path: item.link_url,
  }));

  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const prevPageX = useRef(0);
  const prevScrollLeft = useRef(0);
  const positionDiff = useRef(0);

  const autoSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    if (slider.scrollLeft === slider.scrollWidth - slider.clientWidth) return;
    if (slider.scrollLeft === 0) return;

    const positiveDiff = Math.abs(positionDiff.current);
    const firstChildWidth = slider.children[0].clientWidth;
    const multiplier = Math.round(positiveDiff / firstChildWidth);
    const valDiff = firstChildWidth * multiplier - positiveDiff;

    if (slider.scrollLeft < prevScrollLeft.current) {
      slider.style.scrollBehavior = "smooth";
      slider.scrollLeft -=
        positiveDiff > firstChildWidth / 2 ? valDiff : -positiveDiff;
    } else {
      slider.style.scrollBehavior = "smooth";
      slider.scrollLeft +=
        positiveDiff > firstChildWidth / 2 ? valDiff : -positiveDiff;
    }
    slider.style.scrollBehavior = "auto";
  };

  const handleDragging = (e: any) => {
    const slider = sliderRef.current;
    positionDiff.current = (e.pageX || e.touches[0].pageX) - prevPageX.current;
    if (slider && isDragging) {
      slider.scrollLeft = prevScrollLeft.current - positionDiff.current;
    }
  };

  const handleMouseDown = (e: any) => {
    if (sliderRef.current) sliderRef.current.style.scrollBehavior = "auto";
    prevPageX.current = e.pageX || e.touches[0].pageX;
    prevScrollLeft.current = sliderRef.current?.scrollLeft || 0;
    if (positionDiff.current !== 0) {
      setTimeout(() => {
        setIsDragging(true);
      }, 100);
    }
    positionDiff.current = 0;
  };

  const handleMouseUp = () => {
    if (sliderRef.current) sliderRef.current.style.scrollBehavior = "auto";
    if (isDragging) autoSlide();
    setIsDragging(false);
    positionDiff.current = 0;
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
      sliderRef.current.scrollLeft -=
        sliderRef.current?.children[0].clientWidth || 0;
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
      sliderRef.current.scrollLeft +=
        sliderRef.current?.children[0].clientWidth || 0;
    }
  };

  return (
    <div className="category-slider-container">
      <div className="products__content--top">
        <ProductsTitle title={"Khám phá sản phẩm"} />
        <ProductsButtons
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>
      <div
        ref={sliderRef}
        className={`category-slider ${isDragging ? "dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseMove={handleDragging}
        onTouchMove={handleDragging}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchEnd={handleMouseUp}
      >
        {categories.map((item: any) => (
          <CategoryCard
            key={item.label}
            imageUrl={item.imageUrl}
            altText={item.label}
            productName={item.label}
            path={item.path}
            isDragging={isDragging}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
