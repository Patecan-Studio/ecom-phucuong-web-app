import React from "react";
import { ProductsSubContentProps } from "./types";
import { Product } from "./Product";

const ProductsSubContent = ({
  products,
  productsRef,
}: ProductsSubContentProps) => {
  const renderProducts = () => {
    let productsArray = [];

    for (let i = 0; i < products.length; i += 2) {
      productsArray.push(
        <div className="products__sub-content__item" key={products[i].id}>
          <Product
            name={products[i].product_name}
            image={products[i].product_images[0]}
            price={products[i].product_price}
            discountRatio={products[i].discount_ratio}
            discountPrice={products[i].discount_price}
            isNew={products[i].is_new}
            brandImage={products[i].brand.brand_image}
          />

          <Product
            name={products[i + 1].product_name}
            image={products[i + 1].product_images[0]}
            price={products[i + 1].product_price}
            discountRatio={products[i + 1].discount_ratio}
            discountPrice={products[i + 1].discount_price}
            isNew={products[i + 1].is_new}
            brandImage={products[i + 1].brand.brand_image}
          />
        </div>
      );
    }

    return productsArray;
  };

  return (
    <div className="products__sub-content" ref={productsRef}>
      <div className="products__sub-content__items">
        {renderProducts()}
      </div>
    </div>
  );
};

export default ProductsSubContent;
