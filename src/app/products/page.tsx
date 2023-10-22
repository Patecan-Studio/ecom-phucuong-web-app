import React from "react";
import "@/styles/common.scss";
import "@/styles/colors.scss";
import "@/styles/fonts.scss";
import "@/styles/reset.css";
import "@/styles/responsives.scss";
import styles from "./page.module.css";
import { Products } from "@/components/common";
import { ProductBanner } from "@/components/composite";

const categoryId = "6532144232d913fecc48e400";

const getCategory = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.SITE_DOMAIN}/api/v1/categories/${categoryId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async () => {
  const category = await getCategory(categoryId);
  return (
    <div className={styles.products}>
      <ProductBanner
        title={category.category_name}
        description={category.category_description}
        image={category.category_images[0].imageUrl}
      />
      <Products />
    </div>
  );
};

export default Page;
