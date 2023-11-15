import styles from "./styles.module.scss";
import {useState, useEffect, SetStateAction, Dispatch} from "react";
import {compareArrays} from "@/utils/Utils";
import {CartItem} from "@/store/types";

interface CartHeaderProps {
    cartItems: CartItem[]; // Replace 'CartItem' with the actual type of your cartItems
    selected: any[]; // Replace 'boolean' with the actual type of your selected
    setSelected: Dispatch<SetStateAction<any[]>>; // Replace with the actual type of setSelected
}

export default function CartHeader({cartItems, selected, setSelected}: CartHeaderProps) {
    const [active, setActive] = useState();


    useEffect(() => {
        const products = cartItems.map((cartItem)=>{
            return {...cartItem.product, qty: cartItem.qty}
        });

        const check = compareArrays(products, selected);
        setActive(check);
    }, [selected]);

    const handleSelect = () => {
        const products = cartItems.map((cartItem)=>{
            return {...cartItem.product, qty: cartItem.qty}
        });
        console.log("SELECT ALL: "+JSON.stringify(products))
        if (selected.length !== cartItems.length) {
            setSelected(products);
        } else {
            setSelected([]);
        }
    };

    return (
        <div className={`${styles.cart__checkout} ${styles.card}`}>
            <h1>Item Summary({cartItems.length})</h1>
            <div
                className={styles.flex}
                onClick={() => handleSelect()}
            >
                <div
                    className={`${styles.checkbox} ${active ? styles.active : ""}`}
                ></div>
                <span>Select all items</span>
            </div>
        </div>
    );
}
