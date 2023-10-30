import React from "react";
import "./style.scss";
import { CustomImage } from "..";
import Link from "next/link";
const categoryList = [
  {
    imgUrl:
      `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/outside.png`,
    cateName: "Sofa",
    id: "653b4f1d85e86f091c56cb76",
  },
  {
    imgUrl:
      `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/living-room.png`,
    cateName: "Phòng Khách",
    id: "653b4c7085e86f091c56cb06",
  },
  {
    imgUrl:
      `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/kitchen.jpg`,
    cateName: "Phòng Bếp",
    id: "653b5f5590f7fb2f9cfdd2b0",
  },
  {
    imgUrl:
      `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/office.jpg`,
    cateName: "Phòng làm việc",
    id: "653b4eb685e86f091c56cb5a",
  },
  {
    imgUrl:
      `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/decor.jpg`,
    cateName: "Phụ kiện khác",
    id: "653b600e90f7fb2f9cfdd2e8",
  },
  {
    imgUrl:
      `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/bed-room.jpg`,
    cateName: "Phòng Ngủ",
    id: "653b4e0d85e86f091c56cb2a",
  },
  {
    imgUrl:
      `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/light.jpg`,
    cateName: "Đèn trang trí nội thất",
    id: "653b603890f7fb2f9cfdd2f4",
  },
  {
    imgUrl:
      `https://${process.env.SUPABSE_STORAGE_URL}.supabase.co/storage/v1/object/public/images/homepage/mateiral.jpg`,
    cateName: "Gạch trang trí",
    id: "653b5f7d90f7fb2f9cfdd2bc",
  },
];
const CategorySection = () => {
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
