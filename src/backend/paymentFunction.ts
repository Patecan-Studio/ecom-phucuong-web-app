import axios from "axios";
import {ObjectId} from "mongodb";
import mongoose from "mongoose";
import {ProductVariantStatus} from "@/models/Product.model";


interface OrderInfo {
    user: any,
    productsList: any[],
    shippingAddress: any,
    paymentMethod: string,
    paymentResult: any,
    total: number,
    totalBeforeDiscount: number,
    couponApplied: string,
    shippingPrice: number,
    taxPrice: number,
    isPaid: boolean,
    status: string,
    paidAt: Date,
    deliveredAt: Date,
}

export const createSession = async (orderId: string, amount: number, orderInfo: OrderInfo, orderType: string) => {
    try {
        const {data} = await axios.get(`http://localhost:8080/api/v1/payment`, {
            params: {orderId, amount, orderInfo, orderType},
        });
        console.log("SESSION URI: " + JSON.stringify(data));
        return {
            uri: data
        };
    } catch (error: any) {
        return error.response.data.message;
    }
}
