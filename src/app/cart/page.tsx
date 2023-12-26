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
import { useRouter } from 'next/navigation'
import { Router } from "next/router";
import axios from "axios";


const Cart = () => {
    const router = useRouter();

    //-------------------------------------------------------------------------
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

    // -----------------------------------------------------------------------
    const saveCartHandler = async ()=>{

        const response = await axios.post(`http://localhost:8080/api/v1/carts`, selected);

        const res = response.data;
        if(res.resultCode === 201){
            console.log("REDIRECT TO CHECKOUT");
            router.push("/checkout");
        }

        // if(session){
        //     const res = await saveCart(selected);
        //     console.log(res);
        //     if(res.status === 200){
        //         await Router.push("/checkout");
        //     }
        // }else {
        //     await signIn();
        // }
    }

    //----------------------------------------------------------------------


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
                            <CheckoutSummary subTotal={subTotal} total={total} selected={selected} saveCart={saveCartHandler}/>
                        </div>
                    ) : (
                        <EmptyCart />
                    )}
                </div>

        </>
    )
}

export default Cart;
