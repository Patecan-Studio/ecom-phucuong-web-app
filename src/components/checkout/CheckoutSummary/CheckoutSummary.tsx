import styles from "./styles.module.scss";

import {useState} from "react";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import ShippingInput from "../shipping-input/ShippingInput";
import axios from "axios";
import {useRouter} from 'next/navigation'

interface CheckoutSummaryProps {
    totalAfterDiscount: number,
    setTotalAfterDiscount: (total: number) => void,
    paymentMethod: string,
    selectedAddress: any,
    cart: any,
    user: any
}

export default function CheckoutSummary({totalAfterDiscount, setTotalAfterDiscount, paymentMethod, selectedAddress, cart, user}: CheckoutSummaryProps) {
    const router = useRouter();

    // -----------------------------------------------------------------------
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [error, setError] = useState("");

    const applyCouponHandler = async () => {

    };

    const placeOrderHandler = async () => {
        try {
            if (paymentMethod == "") {
                setError("Please choose a payment method.");
                return;
            } else if (!selectedAddress) {
                setError("Please choose a shipping address.");
                return;
            }
            const {data} = await axios.post("/api/order/createOrder", {
                products: cart.products,
                shippingAddress: selectedAddress,
                paymentMethod,
                total: totalAfterDiscount !== 0 ? totalAfterDiscount : cart.cartTotal,
                totalBeforeDiscount: cart.cartTotal,
                couponApplied: coupon,
            });
            //await Router.push(`/order/${data.order_id}`);
        } catch (error: any) {
            setError(error.response.data.message);
        }
    };

    const validateCoupon = Yup.object({
        coupon: Yup.string().required("Please enter a Coupon first"),
    });
    return (<div className={styles.summary}>
        <div className={styles.header}>
            <h3>Order Summary</h3>
        </div>
        <div className={styles.coupon}>
            <Formik
                enableReinitialize
                initialValues={{coupon}}
                validationSchema={validateCoupon}
                onSubmit={() => {
                    applyCouponHandler();
                }}
            >
                {(formik) => (
                    <Form>
                        <ShippingInput
                            name="coupon"
                            placeholder="*Coupon"
                            onChange={(e: any) => setCoupon(e.target.value)}
                        />
                        {error && <span className={styles.error}>{error}</span>}
                        <button className={styles.apply_btn} type="submit">
                            Apply
                        </button>
                        <div className={styles.infos}>
                            <span>
                                Total : <b>{cart.cartTotal}$</b>{" "}
                            </span>
                            {
                                discount > 0
                                && (<span className={styles.coupon_span}>Coupon applied : <b>-{discount}%</b>
                                    </span>)
                            }
                            {
                                totalAfterDiscount < cart.cartTotal
                                && totalAfterDiscount != 0
                                && (<span>New price : <b>{totalAfterDiscount}$</b></span>)
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
        <button className={styles.submit_btn} onClick={() => placeOrderHandler()}>
            Place Order
        </button>
        {error && <span className={styles.error}>{error}</span>}

    </div>);
}
