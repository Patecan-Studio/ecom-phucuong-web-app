"use client";

import React, { useEffect, useState } from "react";
import { Blog } from "@/components/composite";
import {
  Carousel,
  CategorySection,
  Products,
  CategorySlider,
  SpecialProducts,
} from "@/components/common";
import { usePathname, useSearchParams } from "next/navigation";

const HomeWrapper = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = searchParams.get("page") ? searchParams.get("page") : 1;
  const subPage = searchParams.get("sub_page")
    ? searchParams.get("sub_page")
    : 1;
  const category = searchParams.get("category")
    ? searchParams.get("category")
    : "all";
  const q = searchParams.get("q") ? searchParams.get("q") : "";
  const [sectionList, setSectionList] = useState<any[]>([]);

  useEffect(() => {
    if (pathname === "/") {
      getPageTemplate();
    }
  }, [pathname]);

  const getPageTemplate = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/page-templates/default`
      );
      const data = await response.json();
      setSectionList(data.section_list);
    } catch (error) {
      console.log(error);
    }
  };

  const banner_section =
    sectionList.find((section: any) => section.name === "banner_section")
      ?.image_list || [];

  const category_section =
    sectionList.find((section: any) => section.name === "category_section")
      ?.image_list || [];

  const category_section_background =
    sectionList.find((section: any) => section.name === "category_section")
      ?.background_image_list || [];

  const category_slider_section =
    sectionList.find((section: any) => section.name === "category_slider")
      ?.image_list || [];

  return (
    <>
      <Carousel data={banner_section} />
      <CategorySection
        data={category_section}
        backgroundImages={category_section_background}
      />
      <Products page={page} category={category} q={q} />
      <SpecialProducts page={subPage} />
      <CategorySlider data={category_slider_section} />
      <Blog />
    </>
  );
};

export default HomeWrapper;
