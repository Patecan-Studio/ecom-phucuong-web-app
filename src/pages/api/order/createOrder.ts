// eslint-disable-next-line
//@ts-nocheck

import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

// import UserModel from "../../../models/UserModel";
// import CartModel from "../../../models/CartModel";
// import Product from "../../../models/Product";
import db from "@/utils/db";
import UserModel from "@/models/User.model";
import CartModel from "@/models/Cart.model";
import ProductModel from "@/models/Product.model";
import OrderModel from "@/models/Order.model";
import {ObjectId} from "mongodb";


const router = createRouter<NextApiRequest, NextApiResponse>();
router.post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await db.connectDb();
        console.log("Step 1");

        const {
            productsList,
            shippingAddress,
            paymentMethod,
            total,
            totalBeforeDiscount,
            couponApplied
        } = req.body;
        const user_id = "655609014186e2628008b45d";
        const user = await UserModel.findById(user_id);
        console.log("Step 2: " + JSON.stringify(user));


        const newOrder = new OrderModel({
            user: user_id,
            productsList: productsList,
            shippingAddress,
            paymentMethod,
            totalBeforeDiscount,
            couponApplied,
            total
        });

        let result = await newOrder.save();

        db.disconnectDb();
        return res
            .status(200)
            .json({ status: 200, message: "success", data: result });

    } catch (e: any) {
        return res.status(500).json({ message: e.message });
    }
});
export default router.handler();
