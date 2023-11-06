import React from "react";
import "@/styles/common.scss";
import "@/styles/colors.scss";
import "@/styles/fonts.scss";
import "@/styles/reset.css";
import "@/styles/responsives.scss";
import styles from "./page.module.css";
import { Overview } from "@/components/composite";
import { ProductDescription } from "@/components/common";

const getProduct = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.SITE_DOMAIN}/api/v1/products/${id}?timestamp=${Date.now()}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async ({ params }: { params: { id: string } }) => {
  const productData = await getProduct(params.id);
  return (
    <div className={styles.detail}>
      <Overview data={productData.data} />
      <ProductDescription
        longDesc={productData.data.product_description}
        productName={productData.data.product_name}
        brand={productData.data.product_brand?.brand_name}
        imgURL={productData.data.product_variants[0].image_list[0].imageUrl}
      />
    </div>
  );
};

export default Page;
