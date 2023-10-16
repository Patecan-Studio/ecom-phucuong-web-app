import React from "react";
import "@/styles/common.scss";
import "@/styles/colors.scss";
import "@/styles/fonts.scss";
import "@/styles/reset.css";
import "@/styles/responsives.scss";
import { ProductDescription } from "@/components/common";
import { Overview } from "@/components/composite";

const getProduct = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.SITE_DOMAIN}/api/v1/products/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async ({ params }: { params: { id: string } }) => {
  const res = await getProduct(params.id);
  return (
    <div>
      <Overview />
    </div>
  );
};

export default Page;
