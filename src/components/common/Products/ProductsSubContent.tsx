"use client";
import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import Link from "next/link";

const ProductsSubContent = ({ products, productsRef }: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const renderProducts = () => {
    return products.map((product: any, index: number) => {
      const productComponent = (
        <div className="products__sub-content__item" key={index}>
          {isClient && (
            <Link href={`/products/${product._id}`}>
              <Product
                name={product.product_name}
                image={product.product_banner_image}
                price={product.price}
                discountPercentage={product.discount_percentage}
                discountPrice={product.discount_price}
                isNew={true}
                brandImage={
                  product.product_brand?.brand_logoUrl ||
                  "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/logo_phucuong_new"
                }
                productSlug={product._id}
              />
            </Link>
          )}
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
