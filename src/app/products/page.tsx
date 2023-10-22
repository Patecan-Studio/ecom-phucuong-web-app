import React from "react";
import "@/styles/common.scss";
import "@/styles/colors.scss";
import "@/styles/fonts.scss";
import "@/styles/reset.css";
import "@/styles/responsives.scss";
import styles from "./page.module.css";
import { Products } from "@/components/common";
import { ProductBanner } from "@/components/composite";

const defaultCategory = {
  category_name: "Tất cả sản phẩm",
  category_images: [
    {
      imageName: "Tất cả sản phẩm",
      imageUrl:
        "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/category/Living-room-in-amagansett-beach-house.webp",
      _id: "6532144232d913fecc48e401",
    },
  ],
};

const getCategory = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.SITE_DOMAIN}/api/v1/categories/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const category = searchParams.category
    ? await getCategory(searchParams.category)
    : defaultCategory;
  return (
    <div className={styles.products}>
      <ProductBanner
        title={category.category_name}
        description={category.category_description}
        image={category.category_images[0].imageUrl}
      />
      <Products
        productsTitle={category.category_name}
        category={searchParams.category ? searchParams.category : "all"}
      />
    </div>
  );
};

export default Page;
