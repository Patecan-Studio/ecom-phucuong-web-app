import React from "react";
import { ProductsSubContentProps } from "./types";
import { Product } from "./Product";

const ProductsSubContent = ({ products, productsRef }: any) => {
  const renderProducts = () => {
    return products?.map((product: any, index: number) => {
      const productComponent = (
        <div className="products__sub-content__item" key={index}>
          <Product
            name={product.product_name}
            image={product.image.imageUrl}
            price={product.price}
            discountRatio={product.discount_percentage}
            discountPrice={product.discount_price}
            isNew={true}
            brandImage={product.product_banner_image.imageUrl}
          />
        </div>
      );

      return productComponent;
    });
  };

  return (
    <div className="products__sub-content" ref={productsRef}>
      <div className="products__sub-content__items">{renderProducts()}</div>
    </div>
  );
};

export default ProductsSubContent;
