import styles from "./styles.module.scss";
import Link from "next/link";
import {MdPlayArrow} from "react-icons/md";

export default function CartHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__left}>
                    <Link href={"/"}>
                        <img src="../../../../../images/logo.png" alt=""/>
                    </Link>
                </div>
                <div className={styles.header__right}>
                    <Link href={"/browse"}>
                        Continue Shopping
                        <MdPlayArrow/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
