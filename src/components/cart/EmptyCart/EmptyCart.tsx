import styles from "./styles.module.scss";
import Link from "next/link";

export default function EmptyCart() {

    return (
        <div className={styles.empty}>
            <img src={"../../../../../images/cart/EmptyCart.png"} alt={""}/>
            <h1>Cart is empty</h1>

            <Link href={"/browse"}>
                <button className={styles.empty__btn}>SHOP NOW</button>
            </Link>

        </div>
    )
}
