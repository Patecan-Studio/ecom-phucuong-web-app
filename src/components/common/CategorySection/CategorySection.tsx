"use client";
import React, { useState } from "react";
import "./style.scss";

const CategorySection = () => {
  const [currentLink, setCurrentLink] = useState(
    "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/outside.png"
  );
  return (
    <div className="category-section">
      <div className="category-section__left-content"></div>
      <div className="category-section__right-content">
        <img className="" src={currentLink} alt="main-slide-1" />
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
          <div
            className="icon-wrapper"
            onMouseEnter={() =>
              setCurrentLink(
                "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/outside.png"
              )
            }
          >
            <img src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/outside.png" />
            <span>Ngoài trời</span>
          </div>
          <div
            className="icon-wrapper"
            onMouseEnter={() =>
              setCurrentLink(
                "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/living-room.png"
              )
            }
          >
            <img src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/living-room.png" />
            <span>Phòng Khách</span>
          </div>
          <div
            className="icon-wrapper"
            onMouseEnter={() =>
              setCurrentLink(
                "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/kitchen.jpg"
              )
            }
          >
            <img src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/kitchen.jpg" />
            <span>Phòng Bếp</span>
          </div>
          <div
            className="icon-wrapper"
            onMouseEnter={() =>
              setCurrentLink(
                "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/office.jpg"
              )
            }
          >
            <img src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/office.jpg" />
            <span>Văn Phòng</span>
          </div>
          <div
            className="icon-wrapper"
            onMouseEnter={() =>
              setCurrentLink(
                "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/decor.jpg"
              )
            }
          >
            <img src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/decor.jpg" />
            <span>Sản Phẩm Trang Trí</span>
          </div>
          <div
            className="icon-wrapper"
            onMouseEnter={() =>
              setCurrentLink(
                "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/bed-room.jpg"
              )
            }
          >
            <img src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/bed-room.jpg" />
            <span>Phòng Ngủ</span>
          </div>
          <div
            className="icon-wrapper"
            onMouseEnter={() =>
              setCurrentLink(
                "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/light.jpg"
              )
            }
          >
            <img src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/light.jpg" />
            <span>Giải Pháp Chiếu Sáng</span>
          </div>
          <div
            className="icon-wrapper"
            onMouseEnter={() =>
              setCurrentLink(
                "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/mateiral.jpg"
              )
            }
          >
            <img src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/mateiral.jpg" />
            <span>Vật Liệu Hoàn Thiện</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
