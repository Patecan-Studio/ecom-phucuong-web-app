import React from "react";
import "@/styles/common.scss";
import "@/styles/colors.scss";
import "@/styles/fonts.scss";
import "@/styles/reset.css";
import "@/styles/responsives.scss";
import styles from "./page.module.css";
import { Products } from "@/components/common";

const Page = () => {
  return (
    <div className={styles.products}>
      <Products />
    </div>
  );
};

export default Page;
