"use client"

import styles from "./styles.module.scss";
import EmptyCart from "../../components/cart/EmptyCart/EmptyCart";
import {cartState} from "@/store/cartSlice";
import {useSelector} from "react-redux";
import {ReduxProviders} from "@/components/Provider";
import CartItem from "@/components/cart/CartItem/CartItem";
import {useState} from "react";
import {persistor} from "@/store/store";


const Cart = () => {
    const [selected, setSelected] = useState([]);
    const cart = useSelector(cartState);

    cart.cartItems.forEach((item) => {
        console.log(item.product);
        console.log(item.qty);
    });

    return (
        <>

                <div className={styles.cart}>
                    {cart.cartItems.length > 0 ? (
                        <div className={styles.cart__container}>
                            <div className={styles.cart__products}>
                                {cart.cartItems.map((cartItem) => (
                                    <CartItem
                                        key={cartItem.product._uid}
                                        product={{
                                            ...cartItem.product,
                                            qty: cartItem.qty, // add your new field and value here
                                        }}
                                        qty={cartItem.qty}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <EmptyCart />
                    )}
                </div>

        </>
    )
}

export default Cart;
