"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductsTitle from "@/components/common/Products/ProductsTitle";
import ProductsButtons from "@/components/common/Products/ProductsButtons/ProductsButtons";
import CategoryCard from "@/components/common/CategorySlider/CategoryCard";
import "./styles.scss";

const categories = [
  {
    label: "Giường",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/giuong.jpeg`,
    path: "/products?category=653b4e1a85e86f091c56cb2e",
  },
  {
    label: "Sofa",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/sofa.png`,
    path: "/products?category=653b4f1d85e86f091c56cb76",
  },
  {
    label: "Bếp",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/bep.png`,
    path: "/products?category=653b5f5590f7fb2f9cfdd2b0",
  },
  {
    label: "Ghế Gaming",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/ghe_gaming.jpeg`,
    path: "/products?category=653b4efb85e86f091c56cb6e",
  },
  {
    label: "Phụ kiện cho bé",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/phu_kien_cho_be.jpeg`,
    path: "/products?category=653b60a190f7fb2f9cfdd314",
  },
  {
    label: "Nệm",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/nem.jpeg`,
    path: "/products?category=653b607a90f7fb2f9cfdd308",
  },
  {
    label: "Nội thất phòng khách",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/noi_that_phong_khach.png`,
    path: "/products?category=653b4c7085e86f091c56cb06",
  },
  {
    label: "Đèn",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/den.jpeg`,
    path: "/products?category=653b603890f7fb2f9cfdd2f4",
  },
  {
    label: "Ghế bành",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/ghe_banh.png`,
    path: "/products?category=653b4ce985e86f091c56cb0a",
  },
  {
    label: "Tranh treo tường",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/tranh_khung_anh.jpeg`,
    path: "/products?category=653b5ff590f7fb2f9cfdd2e0",
  },
  {
    label: "Tủ quần áo",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/tu_quan_ao.jpeg`,
    path: "/products?category=653b4e5485e86f091c56cb3e",
  },
];

const CategorySlider: React.FC = () => {
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
    const multiplier = Math.ceil(positiveDiff / firstChildWidth);
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
      setIsDragging(true);
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
        {categories.map((item) => (
          <CategoryCard
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
