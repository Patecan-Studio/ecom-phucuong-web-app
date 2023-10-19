"use client";
import React, { useState } from "react";
import { CustomImage } from "..";
import "./style.scss";
import { ReadMoreProps } from "./types";


//remove this when use component
let testLongDesc =
  "Inspired by the motion of light as it reflects and refracts on landscapes and objects. Multiple soft shades of yarn are woven into one strand, which mimics the hues of natural light and makes each chair unique. The handwoven seat in weather-resistant Tricord rope, draws inward to create a warm, intimate cocoon effect. The chair, perfect for relaxed dining, is framed by natural teak, which supports the seating shell primarily through the back legs that cross the shell. Inspired by the motion of light as it reflects and refracts on landscapes and objects. Multiple soft shades of yarn are woven into one strand, which mimics the hues of natural light and makes each chair unique. The handwoven seat in weather-resistant Tricord rope, draws inward to create a warm, intimate cocoon effect. The chair, perfect for relaxed dining, is framed by natural teak, which supports the seating shell primarily through the back legs that cross the shell. Inspired by the motion of light as it reflects and refracts on landscapes and objects. Multiple soft shades of yarn are woven into one strand, which mimics the hues of natural light and makes each chair unique. The handwoven seat in weather-resistant Tricord rope, draws inward to create a warm, intimate cocoon effect. The chair, perfect for relaxed dining, is framed by natural teak, which supports the seating shell primarily through the back legs that cross the shell.";
let testShortDesc = " Elio, referring to the Greek sun god Helios and designed by Canadian design firm Yabu Pushelberg"
let testBrand = "Hansgrohe"
let testProductName = "ghế ăn elio"
// ----

const ProductDescription: React.FC<ReadMoreProps> = ({
  longDesc,
  shortDesc,
  brand,
  productName,
  maxChars = 500,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };
  //remove this when use component
  brand = testBrand;
  productName = testProductName;
  longDesc = testLongDesc;
  shortDesc = testShortDesc;
  // ------

  const displayText = expanded ? longDesc : longDesc.slice(0, maxChars).concat("...");
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
          <span className="short-desc">
            {shortDesc}
          </span>
          <span className="about-desc">Về {productName} của {brand}</span>
          <span className="long-desc">{displayText}</span>
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
