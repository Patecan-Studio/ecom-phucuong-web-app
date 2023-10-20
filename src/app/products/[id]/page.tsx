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
      `${process.env.SITE_DOMAIN}/api/v1/products/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async ({ params }: { params: { id: string } }) => {
  const productData = await getProduct(params.id);
  console.log("productData", productData);

  return (
    <div className={styles.detail}>
      <Overview data={productData} />
      <ProductDescription
        shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eu nunc. Sed vitae nisl euismod, aliquam nisl sed, aliquam nisl. Sed vitae nisl euismod, aliquam nisl sed, aliquam nisl."
        longDesc={productData.product_description}
        productName={productData.product_name}
        brand={productData.product_brand.brand_name}
      />
    </div>
  );
};

export default Page;
