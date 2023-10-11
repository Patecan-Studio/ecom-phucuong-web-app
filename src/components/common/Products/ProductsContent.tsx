import React from "react";
import { Product } from "./Product";
import { ProductsContentProps } from "./types";

const ProductsContent = ({products}: ProductsContentProps) => {
  return (
    <div className="products__content">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.product_name}
          image={product.product_images[0]}
          price={product.product_price}
          discountRatio={product.discount_ratio}
          discountPrice={product.discount_price}
          isNew={product.is_new}
          brandImage={product.brand.brand_image}
        />
      ))}
    </div>
  );
};

export default ProductsContent;
