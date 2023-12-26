// eslint-disable-next-line
//@ts-nocheck

import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

import db from "@/utils/db";
import UserModel from "@/models/User.model";
import Stripe from 'stripe';
import OrderModel from "@/models/Order.model";

const stripe = new Stripe('sk_test_51OKjHyANLW4xE7fNQ8IMewjDHRBFDd1bEUhnM1PVNYOHItX2hbJv9Nob49O1LYjfv1uP7GlYVQEK915FdSbX9XLs00MX5VxLd0');

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await db.connectDb();
        console.log("Step 1: "+stripe.tokens);

        const {
            amount,
            id,
            order_id
        } = req.body;

        console.log("Step 1.1: "+id);
        console.log("Step 1.2: "+order_id);
        const payment: Stripe.PaymentIntent = await
            stripe.paymentIntents.create({
                amount: 1099,
                currency: 'sgd',
                confirm: true,
                payment_method: id,
                payment_method_types: ['card'],
                return_url: 'http://localhost:3000/order/656b0572bc218bf35c1c63be',
            });


        const order = await OrderModel.findById(order_id);

        console.log("Step 2: "+order);


            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: payment.id,
                status: payment.status,
                email_address: payment.email_address,
            };
            await order.save();

        db.disconnectDb();
        return res
            .status(200)
            .json({ status: 200, message: "success", data: "OK" });

    } catch (e: any) {
        return res.status(500).json({ message: e.message });
    }
});
export default router.handler();
