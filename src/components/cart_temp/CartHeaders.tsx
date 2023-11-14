import Link from "next/link";
import React from "react";
import CartBtn from "./CartBtn";


const CartHeaders = () => {
    return (
        <header className={"bg-gradient-to-b from-sky-200 to-sky-50 border shadow p-2 flex"}>
            <Link className={"text-sky-600"} href={"/"}> Home </Link>
            <Link
                className={"ml-auto"}
                href={"/cart"}
            >
                <CartBtn/>
            </Link>
        </header>
    )
}

export default CartHeaders;
