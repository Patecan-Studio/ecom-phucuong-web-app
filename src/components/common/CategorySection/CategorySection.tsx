// "use client";

import React from "react";
import "./style.scss";
import { CustomImage } from "..";

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="category-section__left-content"></div>
      <div className="category-section__right-content">
        <CustomImage
          src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/phucuong_background_large.webp"
          alt="main-slide-1"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="category-section__center-content">
        <div className="left">
          <h1>Lựa chọn sản phẩm yêu thích theo từng loại phòng</h1>
          <p>
            Hàng nghìn sản phẩm yêu thích theo từng loại phòng, cùng khám phá
            ngay!
          </p>
        </div>
        <div className="right">
          <div className="icon-wrapper">
            <CustomImage
              src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/outside.png"
              alt="main-slide-2"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span>Ngoài trời</span>
          </div>
          <div className="icon-wrapper">
            <CustomImage
              src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/living-room.png"
              alt="main-slide-1"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span>Phòng Khách</span>
          </div>
          <div className="icon-wrapper">
            <CustomImage
              src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/kitchen.jpg"
              alt="main-slide-3"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span>Phòng Bếp</span>
          </div>
          <div className="icon-wrapper">
            <CustomImage
              src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/office.jpg"
              alt="main-slide-4"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span>Văn Phòng</span>
          </div>
          <div className="icon-wrapper">
            <CustomImage
              src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/decor.jpg"
              alt="main-slide-5"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span>Sản Phẩm Trang Trí</span>
          </div>
          <div className="icon-wrapper">
            <CustomImage
              src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/bed-room.jpg"
              alt="main-slide-6"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span>Phòng Ngủ</span>
          </div>
          <div className="icon-wrapper">
            <CustomImage
              src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/light.jpg"
              alt="main-slide-7"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span>Giải Pháp Chiếu Sáng</span>
          </div>
          <div className="icon-wrapper">
            <CustomImage
              src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/mateiral.jpg"
              alt="main-slide-8"
              width={0}
              height={0}
              sizes="100vw"
            />
            <span>Vật Liệu Hoàn Thiện</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
