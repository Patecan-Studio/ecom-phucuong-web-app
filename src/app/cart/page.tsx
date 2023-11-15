"use client"

import styles from "./styles.module.scss";
import EmptyCart from "../../components/cart/EmptyCart/EmptyCart";
import {cartState} from "@/store/cartSlice";
import {useSelector} from "react-redux";
import {ReduxProviders} from "@/components/Provider";
import CartItem from "@/components/cart/CartItem/CartItem";
import {useEffect, useState} from "react";
import {persistor} from "@/store/store";
import CheckoutSummary from "@/components/cart/CheckoutSummary/CheckoutSummary";
import CartHeader from "@/components/cart/CartHeader/CartHeader";


const Cart = () => {
    const [selected, setSelected] = useState<any[]>([]);
    console.log("SELECTED: "+JSON.stringify(selected));
    const cart = useSelector(cartState);

    cart.cartItems.forEach((item) => {
        console.log(item.product);
        console.log(item.qty);
    });



    //-------------------------------------------------------------------------
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setSubTotal(selected.reduce((acc, item) => acc + item.qty * item.variant.discount_price, 0));
        setTotal(selected.reduce((acc, item) => acc + item.qty * item.variant.discount_price, 0));
    }, [selected]);

    //-------------------------------------------------------------------------


    return (
        <>
                <div className={styles.cart}>
                    {cart.cartItems.length > 0 ? (
                        <div className={styles.cart__container}>
                            <CartHeader
                                cartItems={cart.cartItems}
                                selected={selected}
                                setSelected={setSelected}
                            />
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
                            <CheckoutSummary subTotal={subTotal} total={total} selected={selected} />
                        </div>
                    ) : (
                        <EmptyCart />
                    )}
                </div>

        </>
    )
}

export default Cart;
