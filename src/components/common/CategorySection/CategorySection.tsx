"use client";

import React from "react";
import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import { cloudflareLoader } from "@/share/utils/cloudflare/images";

const CategorySection = ({ data, backgroundImages }: any) => {
  const categoryList = data.map((item: any) => {
    const categoryId = item.link_url ? item.link_url.split("category=")[1] : "";
    return {
      id: categoryId,
      cateName: item.display_text,
      imgUrl: `${item.image_url}?w=200&h=200&fit=crop&auto=format`,
      linkUrl: item.link_url,
    };
  });

  if (categoryList.length > 8) {
    categoryList.splice(8, categoryList.length - 8);
  }

  const styles = {
    "--left-background-image": `url(${backgroundImages[0]})` || `url('')`,
  } as React.CSSProperties;

  return (
    <div className="category-section" style={styles}>
      <div className="category-section__left-content"></div>
      <div className="category-section__right-content">
        <Image
          src={backgroundImages[1] || "/images/phucuong_background_large.webp"}
          alt="main-slide-1"
          width={0}
          height={0}
          sizes="100vw"
          loader={() => cloudflareLoader({
            src: backgroundImages[1] || "/images/phucuong_background_large.webp",
            width: 960,
          })
          }
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
                <Image
                  src={item.imgUrl}
                  alt="main-slide-2"
                  width={0}
                  height={0}
                  sizes="100vw"
                  loader={() => cloudflareLoader({
                    src: item.imgUrl,
                    width: 170,
                  })
                  }
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
