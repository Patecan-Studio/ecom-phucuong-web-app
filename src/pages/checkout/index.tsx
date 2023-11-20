import styles from "./styles.module.scss";
import {useEffect, useState} from "react";
import db from "@/utils/db";
import UserModel from "@/models/User.model";
import CartModel from "@/models/Cart.model";
import Shipping from "@/components/checkout/Shipping/Shipping";
import CheckoutPaymentMethod from "@/components/checkout/CheckoutPaymentMethod/CheckoutPaymentMethod";
import CheckoutProductsCart from "@/components/checkout/CheckoutProductCart/CheckoutProductsCart";
import CheckoutSummary from "@/components/checkout/CheckoutSummary/CheckoutSummary";



interface CheckoutProps {
    cart: any,
    user: any
}

interface Address {
    firstName: string | '',
    lastName: string | '',
    phoneNumber: string | '',
    email: string | '',
    country: string | '',
    city: string | '',
    district:string | '',
    ward: string | '',
    address1: string | '',
    zipCode: string | '',
    active: boolean | false
}



// eslint-disable-next-line @next/next/no-async-client-component
export default function Checkout({cart, user}:CheckoutProps) {


    const [addresses, setAddresses] = useState(user.address ?? []);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);

    useEffect(() => {
        let whichAddressIsActive = addresses.find((address: Address) => address.active == true);
        if (whichAddressIsActive) {
            setSelectedAddress(whichAddressIsActive);
        } else {
            setSelectedAddress(addresses[0] ?? "");
        }
    }, [addresses]);


    return (
        <div className={`${styles.container} ${styles.checkout}`}>
            <div className={styles.checkout_side}>
                <Shipping
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    user={user}
                    addresses={addresses}
                    setAddresses={setAddresses}
                />
                <CheckoutProductsCart
                    cart={cart}
                />
            </div>
            <div className={styles.checkout_side}>
                <CheckoutPaymentMethod
                    paymentMethod={paymentMethod}
                    setPaymentMethod={setPaymentMethod}
                />
                <CheckoutSummary
                    totalAfterDiscount={totalAfterDiscount}
                    setTotalAfterDiscount={setTotalAfterDiscount}
                    paymentMethod={paymentMethod!}
                    selectedAddress={selectedAddress}
                    cart={cart}
                    user={user}
                />
            </div>
            <div className={styles.checkout_side}></div>

        </div>

    );
}

export async function getServerSideProps(context: any) {
    console.log("GET DATA");
    await db.connectDb();
    const user = await UserModel.findById('655609014186e2628008b45d');
    console.log(user);
    const cart = await CartModel.findOne({user: user._id});
    console.log(user);

    db.disconnectDb();
    if (!cart) {
        return {
            redirect: {
                destination: "/cart",
            }
        }
    }

    return {
        props: {
            cart: JSON.parse(JSON.stringify(cart)),
            user: JSON.parse(JSON.stringify(user))
        }
    }

}

