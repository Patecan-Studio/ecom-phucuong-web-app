import styles from "./styles.module.scss";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import StripeForm from "@/pages/StripePayment/StripeForm.js";

interface StripePaymentProps {
    total: number,
    order_id: string,
    stripe_public_key: string
}
export default function StripePayment({ total, order_id,stripe_public_key}: StripePaymentProps){
    const stripePromise = loadStripe(stripe_public_key);

    return (
        <Elements stripe={stripePromise}>
            <StripeForm order_id={order_id} total={total} />
        </Elements>
    )
}


