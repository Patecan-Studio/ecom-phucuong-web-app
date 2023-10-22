import React from "react";
import "./style.scss";
import NextImage from "next/image";

const ProductBanner = ({ name, description, image }: any) => {
  return (
    <div className="product-banner-container">
      <div className="product-banner">
        <div className="product-banner__left">
          <h1 className="product-banner__title">{name}</h1>
          <div className="product-banner__description">{description}</div>
        </div>
        <div className="product-banner__right">
          <div className="product-banner__image">
            <NextImage
              src={image}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
