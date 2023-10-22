import React from "react";
import "./style.scss";
import { CustomImage } from "..";
import Link from "next/link";
const categoryList = [
  {
    imgUrl:
      "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/outside.png",
    cateName: "Ngoài trời",
    id: "6535548433cf7373f9c93881",
  },
  {
    imgUrl:
      "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/living-room.png",
    cateName: "Phòng Khách",
    id: "653554ac33cf7373f9c93885",
  },
  {
    imgUrl:
      "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/kitchen.jpg",
    cateName: "Phòng Bếp",
    id: "653554c933cf7373f9c93889",
  },
  {
    imgUrl:
      "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/office.jpg",
    cateName: "Văn Phòng",
    id: "653554f333cf7373f9c9388d",
  },
  {
    imgUrl:
      "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/decor.jpg",
    cateName: "Sản Phẩm Trang Trí",
    id: "6535551033cf7373f9c93891",
  },
  {
    imgUrl:
      "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/bed-room.jpg",
    cateName: "Phòng Ngủ",
    id: "6535552d33cf7373f9c93895",
  },
  {
    imgUrl:
      "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/light.jpg",
    cateName: "Giải Pháp Chiếu Sáng",
    id: "6535555333cf7373f9c93899",
  },
  {
    imgUrl:
      "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/homepage/mateiral.jpg",
    cateName: "Vật Liệu Hoàn Thiện",
    id: "6535557833cf7373f9c9389d",
  },
];
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
          {categoryList.map((item) => (
            <Link key={item.id} href={`/products?category=${item.id}`}>
              <div className="icon-wrapper">
                <CustomImage
                  src={item.imgUrl}
                  alt="main-slide-2"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <span>{item.cateName}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
