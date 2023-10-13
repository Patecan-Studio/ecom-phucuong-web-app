import {
  Carousel,
  CategorySection,
  Products,
  Tabbar,
} from "@/components/common";
import styles from "./page.module.css";
import "../styles/common.scss";
import "../styles/colors.scss";
import "../styles/fonts.scss";
import "../styles/reset.css";
import "../styles/responsives.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Tabbar />
      <Carousel />
      <CategorySection />
      <Products />
      <div
        style={{ height: "2000px", backgroundColor: "white", color: "black" }}
      ></div>
    </main>
  );
}
