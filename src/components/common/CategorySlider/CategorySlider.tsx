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

  const widthToScroll = (sliderRef.current?.children[0].clientWidth || 0) + 16; // 16 is the margin between cards

  const handleDragging = (e: any) => {
    e.preventDefault();
    const slider = sliderRef.current;
    positionDiff.current = (e.pageX || e.touches[0].pageX) - prevPageX.current;
    if (slider && isDragging) {
      slider.scrollLeft = prevScrollLeft.current - positionDiff.current;
    }
  };

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    prevPageX.current = e.pageX || e.touches[0].pageX;
    prevScrollLeft.current = sliderRef.current?.scrollLeft || 0;

    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= widthToScroll;
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += widthToScroll;
    }
  };

  return (
    // <div className="category-slider mx-4 mb-8">
    //   <div className="products__content--top">
    //     <ProductsTitle title={"Khám phá sản phẩm"} />
    //     <ProductsButtons onPrevClick={scrollLeft} onNextClick={scrollRight} />
    //   </div>
    //   <div className="max-w-screen bg-[#F1F1F1] rounded-2xl">
    //     <div ref={sliderRef} className="flex space-x-8 overflow-x-hidden p-5">
    //       {categories.map((item) => (
    //         <CategoryCard
    //           key={item.label}
    //           imageUrl={item.imageUrl}
    //           altText={item.label}
    //           productName={item.label}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
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
