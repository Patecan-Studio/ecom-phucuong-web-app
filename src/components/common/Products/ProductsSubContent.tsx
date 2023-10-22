import React from "react";
import { ProductsSubContentProps } from "./types";
import { Product } from "./Product";

const ProductsSubContent = ({ products, productsRef }: any) => {
  const renderProducts = () => {
    let productsArray = [];

    for (let i = 0; i < products.length; i += 2) {
      const product1 = products[i];
      const product2 = products[i + 1];

      const productComponent1 = product1 ? (
        <Product
          name={product1.product_name}
          image={product1.product_banner_image.imageUrl}
          price={product1.price}
          discountRatio={product1.discount_percentage}
          discountPrice={product1.discount_price}
          isNew={true}
          brandImage={product1.product_brand.brand_logoUrl}
        />
      ) : null;

      const productComponent2 = product2 ? (
        <Product
          name={product2.product_name}
          image={product2.product_images[0]}
          price={product2.price}
          discountRatio={product2.discount_percentage}
          discountPrice={product2.discount_price}
          isNew={true}
          brandImage={product2.brand.brand_image}
        />
      ) : null;

      productsArray.push(
        <div className="products__sub-content__item" key={i}>
          {productComponent1}
          {productComponent2}
        </div>
      );
    }

    return productsArray;
  };

  return (
    <div className="products__sub-content" ref={productsRef}>
      <div className="products__sub-content__items">{renderProducts()}</div>
    </div>
  );
};

export default ProductsSubContent;
