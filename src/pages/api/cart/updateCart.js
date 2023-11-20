// import {createRouter} from "next-connect"
// import db from "../../../utils/db";
// import UserModel from "../../../models/UserModel";
// import CartModel from "../../../models/CartModel";
// import Product from "../../../models/Product";
// import {saveCart} from "@/backend/cartFunction";
//
// const router = createRouter()
// router.post(async (req, res) => {
//
//     try {
//         await db.connectDb();
//         console.log('1');
//         const promises = req.body.products.map(async (product) => {
//             let dbProduct = await Product.findById(product._id).lean();
//         });
//
//
//         await db.disconnectDb();
//     } catch (e) {
//         return res.status(500).json({message: e.message});
//     }
// })
// export default router.handler()
