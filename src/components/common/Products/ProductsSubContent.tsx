import React from "react";
import { ProductsSubContentProps } from "./types";
import { Product } from "./Product";

const ProductsSubContent = ({
  products,
  className,
  productsRef,
}: ProductsSubContentProps) => {
  const isOdd = products.length % 2 !== 0;

  return (
    <div className={`products__sub-content ${className}`} ref={productsRef}>
      <div className="products__sub-content__items">
        {products.map((product) => (
          <div className="products__sub-content__item" key={product.id}>
            <Product
              name={product.product_name}
              image={product.product_images[0]}
              price={product.product_price}
              discountRatio={product.discount_ratio}
              discountPrice={product.discount_price}
              isNew={product.is_new}
              brandImage={product.brand.brand_image}
            />
          </div>
        ))}
      </div>
      {isOdd && <div className="products__sub-content--empty"></div>}
    </div>
  );
};

export default ProductsSubContent;
