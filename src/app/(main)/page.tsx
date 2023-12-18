import React from "react";
import { Blog } from "@/components/composite";
import {
  Carousel,
  CategorySection,
  Products,
  CategorySlider,
} from "@/components/common";
import styles from "./page.module.css";

const getPageTemplate = async () => {
  try {
    const response = await fetch(
      `${process.env.SITE_DOMAIN}/api/v1/page-templates/default`,
      { cache: "no-cache" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home({
  searchParams,
}: {
  searchParams: { category: string; page: number; q: string };
}) {
  const pageTemplate = await getPageTemplate();
  const section_list = pageTemplate?.section_list || [];

  const banner_section =
    section_list.find((section: any) => section.name === "banner_section")
      ?.image_list || [];

  const category_section =
    section_list.find((section: any) => section.name === "category_section")
      ?.image_list || [];

  const category_slider_section =
    section_list.find((section: any) => section.name === "category_slider")
      ?.image_list || [];

  return (
    <main className={styles.main}>
      <Carousel data={banner_section} />
      <CategorySection data={category_section} />
      <Products
        page={searchParams.page ? searchParams.page : 1}
        category={searchParams.category ? searchParams.category : "all"}
        pageSize={8}
        q={searchParams.q ? searchParams.q : ""}
      />
      <CategorySlider data={category_slider_section} />
      <Blog />
    </main>
  );
}
