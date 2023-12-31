import React from "react";
import NextImage from "next/image";
import { convertToCurrencyFormat } from "@/share/utils/utils";
import Link from "next/link";

const TabbarSuggest = ({ products, isDisplay }: any) => {
  return (
    <div
      className="tabbar__suggest"
      style={{ display: isDisplay ? "block" : "none" }}
    >
      <h3 className="tabbar__suggest__item tabbar__suggest--title">
        Sản phẩm gợi ý
      </h3>
      {(products || []).map((product: any) => (
        <Link
          href={`/products/${product._id}`}
          className="tabbar__suggest__item"
          key={product._id}
        >
          <NextImage
            src={product.image.imageUrl}
            priority
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "40px", height: "auto" }}
            alt={product.product_name}
          />
          <div className="tabbar__suggest__info">
            <div className="tabbar__suggest__name">{product.product_name}</div>
            <div className="tabbar__suggest__price">
              {convertToCurrencyFormat(product.price)}đ
            </div>
          </div>
        </Link>
      ))}
      <Link className="tabbar__suggest__item tabbar__suggest--all" href="/products">Xem tất cả</Link>
    </div>
  );
};

export default TabbarSuggest;
