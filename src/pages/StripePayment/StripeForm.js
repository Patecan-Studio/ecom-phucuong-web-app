import styles from "./styles.module.scss";
import {loadStripe} from "@stripe/stripe-js";
import {CardElement, Elements, useElements, useStripe} from "@stripe/react-stripe-js";
import {useState} from "react";
import axios from "axios";



const CARD_OPTIONS = {
    iconStyle: "solid",
    style:{
        base: {
            iconColor: "#000",
            color: "#000",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            "--webkit-autofill": { color: "#000" },
            "::placeholder": { color: "#000" }
        },
        invalid: {
            iconColor: "#fd010169",
            color: "#fd010169",
        }
    }
}

export default function StripeForm({order_id, total}) {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements()


    const handleSubmit = async (event) => {
        event.preventDefault();
        // @ts-ignore
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        if(!error){
            try {
                const { id } = paymentMethod;
                const res = await axios.post(`/api/order/${order_id}/payWithStripe`, {
                    id,
                    order_id,
                    amount: total,
                });
                console.log(res);
                if (res.data.success) {
                    window.location.reload(false);
                }
            } catch (error) {
                setError(error);
            }
        }
    }


    return (
        <div className={styles.stripe}>
            Form
            <form onSubmit={handleSubmit}>
                <CardElement options={CARD_OPTIONS}/>
                <button type="submit" disabled={!stripe}>PAY</button>
                {error && <div>{error}</div>}
            </form>

        </div>
    )
}
