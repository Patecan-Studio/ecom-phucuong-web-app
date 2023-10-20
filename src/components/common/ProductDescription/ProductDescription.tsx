"use client";
import React, { useState } from "react";
import { CustomImage } from "..";
import "./style.scss";
import { ReadMoreProps } from "./types";

const ProductDescription: React.FC<ReadMoreProps> = ({
  longDesc,
  shortDesc,
  brand,
  productName,
  maxChars = 100,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const displayText = expanded
    ? longDesc
    : longDesc.slice(0, maxChars).concat("...");
  const readMoreButton = (
    <div>
      {longDesc.length > maxChars && (
        <span className="read-more" onClick={toggleReadMore}>
          {expanded ? "Ẩn bớt" : "Xem thêm"}
        </span>
      )}
    </div>
  );
  return (
    <div className="product-description">
      <div className="product-description__header">Mô tả sản phẩm</div>
      <div className="product-description__content">
        <div className="left">
          <h1>Mô tả sản phẩm</h1>
          <span className="short-desc">{shortDesc && shortDesc}</span>
          <span className="about-desc">
            Về {productName} của {brand}
          </span>
          <span className="long-desc">
            {displayText ? displayText : "Hiện tại sản phẩm chưa có mô tả nào"}
          </span>
          {readMoreButton}
        </div>
        <div className="right">
          <CustomImage
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt=""
            src={"/images/product-images/product-3.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
