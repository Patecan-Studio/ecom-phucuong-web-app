import { Carousel, CategorySection, Products } from "@/components/common";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
      <CategorySection />
      <Products />
      <div
        style={{
          backgroundColor: "white",
          color: "black",
        }}
      ></div>
    </main>
  );
}
