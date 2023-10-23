import { Carousel, CategorySection, Products } from "@/components/common";
import styles from "./page.module.css";

export default function Home({
  searchParams,
}: {
  searchParams: { category: string; page: number, q: string };
}) {
  return (
    <main className={styles.main}>
      <Carousel />
      <CategorySection />
      <Products
        page={searchParams.page ? searchParams.page : 1}
        category={searchParams.category ? searchParams.category : "all"}
        pageSize={8}
        q={searchParams.q ? searchParams.q : ""}
      />
      <div
        style={{
          backgroundColor: "white",
          color: "black",
        }}
      ></div>
    </main>
  );
}
