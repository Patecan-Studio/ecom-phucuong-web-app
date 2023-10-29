import {Carousel, CategorySection, Products} from "@/components/common";
import styles from "./page.module.css";
import SaleBanner from "@/components/common/SaleBanner/SaleBanner";
import ProductCardSlider from "@/components/common/CategorySlider/CategorySlider";
import React from "react";
import CategorySlider from "@/components/common/CategorySlider/CategorySlider";

export default function Home({
                                 searchParams,
                             }: {
    searchParams: { category: string; page: number, q: string };
}) {

    return (
        <main className={styles.main}>
            <Carousel/>
            <CategorySection/>
            <Products
                page={searchParams.page ? searchParams.page : 1}
                category={searchParams.category ? searchParams.category : "all"}
                pageSize={8}
                q={searchParams.q ? searchParams.q : ""}
            />
            <CategorySlider/>
            <div
                style={{
                    backgroundColor: "white",
                    color: "black",
                }}
            ></div>
        </main>
    );
}
