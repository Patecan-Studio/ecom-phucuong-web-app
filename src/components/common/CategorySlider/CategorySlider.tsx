"use client";
import React, { useRef, useState } from "react";
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
    path: "/",
  },
  {
    label: "Sofa",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/sofa.png`,
    path: "/",
  },
  {
    label: "Bếp",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/bep.png`,
    path: "/",
  },
  {
    label: "Ghế Gaming",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/ghe_gaming.jpeg`,
    path: "/",
  },
  {
    label: "Phụ kiện cho bé",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/phu_kien_cho_be.jpeg`,
    path: "/",
  },
  {
    label: "Nệm",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/nem.jpeg`,
    path: "/",
  },
  {
    label: "Nội thất phòng khách",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/noi_that_phong_khach.png`,
    path: "/",
  },
  {
    label: "Đèn",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/den.jpeg`,
    path: "/",
  },
  {
    label: "Ghế bành",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/ghe_banh.png`,
    path: "/",
  },
  {
    label: "Tranh treo tường",
    imageUrl: `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/static/category-images/tranh_khung_anh.jpeg`,
    path: "/",
  },
  {
    label: "Tủ quần áo",
    imageUrl: `https://${
      process.env.SUPABSE_STORAGE_URL || "djwgwcdcgfsknzddrchp"
    }.supabase.co/storage/v1/object/public/images/static/category-images/tu_quan_ao.jpeg`,
    path: "/",
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

    const positiveDiff = Math.abs(positionDiff.current);
    const firstChildWidth = slider.children[0].clientWidth;
    const valDiff = firstChildWidth - positiveDiff;

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
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (sliderRef.current) sliderRef.current.style.scrollBehavior = "auto";
    if (isDragging) autoSlide();
    setIsDragging(false);
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
      sliderRef.current.scrollLeft -=
        (sliderRef.current?.children[0].clientWidth || 0);
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
      sliderRef.current.scrollLeft +=
        (sliderRef.current?.children[0].clientWidth || 0);
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
            key={item.label}
            imageUrl={item.imageUrl}
            altText={item.label}
            productName={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
