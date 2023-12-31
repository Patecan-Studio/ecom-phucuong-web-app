import React from "react";
import { OverviewInfoProps } from "./types";
import { convertToCurrencyFormat } from "@/share/utils/utils";
import Link from "next/link";

const OverviewInfo = ({
  name,
  price,
  discountPrice,
  discountPercentage,
  productCode,
  brandImage,
  brandName,
  quantity,
  categories,
  warranty,
}: OverviewInfoProps) => {
  return (
    <div className="overview__info">
      <h1 className="overview__name">{name}</h1>
      <div className="overview__prices">
        {discountPercentage > 0 ? (
          <>
            <div className="overview__price">
              {convertToCurrencyFormat(price)}đ
            </div>
            <div className="overview__discountPrice">
              {convertToCurrencyFormat(discountPrice)}đ
              <div className="overview__discountPercentage">
                Tiết kiệm: <span>{discountPercentage}%</span>
              </div>
            </div>
          </>
        ) : (
          <div
            className="overview__price"
            style={{ color: "black", textDecoration: "none" }}
          >
            {convertToCurrencyFormat(price)}đ
          </div>
        )}
      </div>
      <div className="overview__identify">
        <div className="overview__code">
          Mã sản phẩm: <span>{productCode}</span>
        </div>
        <div className="overview__brand">
          Thương hiệu: <img src={brandImage} />
        </div>
        {warranty && warranty !== "0" && (
          <div className="overview__warranty">
            Bảo hành: <span>{warranty} tháng</span>
          </div>
        )}
        <div className="overview__quantity--info">
          Số lượng còn lại: {quantity}
        </div>
      </div>

      <div className="overview__categories">
        Loại sản phẩm:
        {categories.map((category) => (
          <Link
            href={`/products?category=${category._id}`}
            className="overview__category"
            key={category._id}
          >
            {category.category_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OverviewInfo;
