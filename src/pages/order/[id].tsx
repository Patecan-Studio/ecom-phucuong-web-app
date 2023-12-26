import styles from "./styles.module.scss";
import {useEffect, useReducer, useState} from "react";
import db from "@/utils/db";
import UserModel from "@/models/User.model";
import {useRouter} from "next/navigation";
import OrderModel from "@/models/Order.model";
import {IoIosArrowForward} from "react-icons/io";
import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import createOrder from "@/pages/api/order/createOrder";
import {PayloadAction} from "@reduxjs/toolkit";
import StripePayment from "@/pages/StripePayment";
import {deleteAddress} from "@/backend/checkoutFunction";
import {createSession} from "@/backend/paymentFunction";

function reducer(state: any, action: any) {
    switch (action.type) {
        case "PAY_REQUEST":
            return {...state, loading: true};
        case "PAY_SUCCESS":
            return {...state, loading: false, success: true};
        case "PAY_FAIL":
            return {...state, loading: false, error: action.payload};
        case "PAY_RESET":
            return {...state, loading: false, success: false, error: false};
    }
}



interface OrderProps {
    orderData: any;
    stripe_public_key: string;
}

export default function Order({orderData, stripe_public_key}: OrderProps) {
    const router = useRouter();


    // useEffect(() => {
    //     if (!orderData._id) {
    //         dispatch({
    //             type: "PAY_RESET",
    //         });
    //     } else {
    //         paypalDispatch({
    //             type: "resetOptions",
    //             value: {
    //                 clientId: paypalClientId,
    //                 currency: "USD",
    //             }
    //         });
    //         paypalDispatch({
    //             type: "setLoadingStatus",
    //             value: "pending",
    //         });
    //     }
    // }, [Order]);


    async function payWithVnPayHandler() {
        console.log("PAY WITH VN PAY");
        const orderId = orderData._id;
        const amount = orderData.total;
        const orderInfo = orderData;
        const orderType = "250000";

        const res = await createSession(orderId, amount, orderInfo, orderType);
        if (res.uri){
            router.push(res.uri);
        }
    }

    function onApproveHandler(data: any, actions: any) {

    }

    function onErrorHandler(error: any) {
        console.log(error);
    }


    return (
        <div className={styles.order}>
            <div className={styles.container}>
                <div className={styles.order__infos}>
                    <div className={styles.order__header}>
                        <div className={styles.order__header_head}>
                            Home <IoIosArrowForward/> Orders <IoIosArrowForward/> ID{""}{orderData._id}
                        </div>
                        <div className={styles.order__header_status}>
                            Payment Status: {
                            orderData.isPaid
                                ? (<img src={"../../../../images/order/verified.webp"} alt={"paid"}/>)
                                : (<img src={"../../../../images/order/unverified.webp"} alt={"un-paid"}/>)
                        }
                        </div>
                        <div className={styles.order__header_status}>
                            Order Status:
                            <span className={
                                orderData.status == "Not Processed"
                                    ? styles.not_processed
                                    : orderData.status == "Processing"
                                        ? styles.processing
                                        : orderData.status == "Dispatched"
                                            ? styles.dispatched
                                            : orderData.status == "Cancelled"
                                                ? styles.cancelled
                                                : orderData.status == "Completed"
                                                    ? styles.completed
                                                    : ""}
                            >{orderData.status}</span>
                        </div>
                    </div>
                    <div className={styles.order__products}>
                        {orderData.productsList.map((product: any) => (
                            <div key={product._id} className={styles.product}>
                                <div className={styles.product__img}>
                                    <img src={product.product_variant_image} alt={product.name}/>
                                </div>
                                <div className={styles.product__infos}>
                                    <h1 className={styles.product__infos_name}>
                                        {product.product_name}
                                    </h1>
                                    <div className={styles.product__infos_style}>
                                        <img src={product.product_variant_image}
                                             alt=""/> / {product.variant.metadata.material}
                                    </div>
                                    <div className={styles.product__infos_priceQty}>
                                        {product.price}$ x {product.qty}
                                    </div>
                                    <div className={styles.product__infos_total}>
                                        {product.price * product.qty}$
                                    </div>
                                </div>
                            </div>

                        ))}
                        <div className={styles.order__products_total}>
                            {orderData.couponApplied ? (
                                <>
                                    <div className={styles.order__products_total_sub}>
                                        <span>Subtotal</span>
                                        <span>{orderData.totalBeforeDiscount}$</span>
                                    </div>
                                    <div className={styles.order__products_total_sub}>
                      <span>
                        Coupon Applied <em>({orderData.couponApplied})</em>{" "}
                      </span>
                                        <span>
                        -
                                            {(
                                                orderData.totalBeforeDiscount - orderData.total
                                            ).toFixed(2)}
                                            $
                      </span>
                                    </div>
                                    <div className={styles.order__products_total_sub}>
                                        <span>Tax price</span>
                                        <span>+{orderData.taxPrice}$</span>
                                    </div>
                                    <div
                                        className={`${styles.order__products_total_sub} ${styles.bordertop}`}
                                    >
                                        <span>TOTAL TO PAY</span>
                                        <b>{orderData.total}$</b>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.order__products_total_sub}>
                                        <span>Tax price</span>
                                        <span>+{orderData.taxPrice}$</span>
                                    </div>
                                    <div
                                        className={`${styles.order__products_total_sub} ${styles.bordertop}`}
                                    >
                                        <span>TOTAL TO PAY</span>
                                        <b>{orderData.total}$</b>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.order__actions}>
                    {/* ----------------------------------- ADDRESS ----------------------------------- */}
                    <div className={styles.order__address}>
                        <h1>${"Customer's Order"}</h1>
                        <div className={styles.order__address_user}>
                            <div className={styles.order__address_user_infos}>
                                <img src={orderData.user.image} alt=""/>
                                <div>
                                    <span>{orderData.user.name}</span>
                                    <span>{orderData.user.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.order__address_shipping}>
                            <h2>Shipping Address</h2>
                            <span> {orderData.shippingAddress.firstName}{" "}{orderData.shippingAddress.lastName}</span>
                            <span>{orderData.shippingAddress.address1}</span>
                            <span>
                                {orderData.shippingAddress.ward}, {orderData.shippingAddress.district}, {orderData.shippingAddress.city}, {orderData.shippingAddress.country}
                            </span>
                            <span>{orderData.shippingAddress.zipCode}</span>
                            <span>{orderData.shippingAddress.country}</span>
                        </div>
                    </div>
                    <button className={styles.stripe} onClick={payWithVnPayHandler}> PAY</button>

                    {/* ----------------------------------- PAYMENT BUTTON ----------------------------------- */}
                    <div className={styles.order__payment}>
                        {/*{orderData.paymentMethod == "vnpay" && (*/}
                        {/*    <StripePayment total={orderData.total} order_id={orderData._id}*/}
                        {/*                   stripe_public_key={stripe_public_key}/>*/}
                        {/*)}*/}


                    </div>


                </div>
            </div>
        </div>
    );
}


export async function getServerSideProps(context: any) {
    await db.connectDb();
    const {query} = context;
    const id = query.id;
    const order = await OrderModel.findById(id)
        .populate({path: "user", model: UserModel})
        .lean();

    const paypalClientId = process.env.PAYPAL_CLIENT_ID;
    const stripe_public_key = process.env.STRIPE_PUBLIC_KEY;

    db.disconnectDb()

    console.log("ORDER DATA: ", order);

    return {
        props: {
            orderData: JSON.parse(JSON.stringify(order)),
            stripe_public_key
        },
    };
}
