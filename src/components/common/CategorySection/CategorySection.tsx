import React from "react";
import "./style.scss";
import { CustomImage } from "..";
import Link from "next/link";
const categoryImages = [
  `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/outside.png`,
  `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/living-room.png`,
  `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/kitchen.jpg`,
  `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/office.jpg`,
  `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/decor.jpg`,
  `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/bed-room.jpg`,
  `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/light.jpg`,
  `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/mateiral.jpg`,
];

const CategorySection = ({ data }: any) => {
  const categoryList = data.map((item: any, index: number) => {
    const categoryId = item.link_url ? item.link_url.split("category=")[1] : "";
    return {
      id: categoryId,
      cateName: item.display_text,
      imgUrl: categoryImages[index],
    };
  });
  return (
    <div className="category-section">
      <div className="category-section__left-content"></div>
      <div className="category-section__right-content">
        <CustomImage
          src={`https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/static/phucuong_background_large.webp`}
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
          {categoryList.map((item: any) => (
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
