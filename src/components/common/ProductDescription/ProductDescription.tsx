"use client";
import React, { useState } from "react";
import "./style.scss";
import { ReadMoreProps } from "./types";
import Image from "next/image";

const ProductDescription: React.FC<ReadMoreProps> = ({
  longDesc,
  shortDesc,
  brand,
  productName,
  maxChars = 100,
  imgURL,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const displayText = longDesc.length < maxChars || expanded
    ? longDesc
    : (longDesc || "").slice(0, maxChars).concat("...");
    
  const readMoreButton = (
    <div>
      {(longDesc || "").length > maxChars && (
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
          <span className="short-desc">{shortDesc && shortDesc}</span>
          <span className="about-desc">
            Về {productName} của {brand}
          </span>
          <div
            className="long-desc"
            dangerouslySetInnerHTML={{
              __html: displayText
                ? displayText
                : "Hiện tại sản phẩm chưa có mô tả nào",
            }}
          />

          {readMoreButton}
        </div>
        <div className="right">
          <Image
            fill
            alt=""
            src={imgURL}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
