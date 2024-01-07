// import {createRouter} from "next-connect"
// import db from "../../../utils/db";
// import UserModel from "../../../models/User.model";
//
//
// const router = createRouter()
// router
//     .put(async (req, res) => {
//
//         try {
//             await db.connectDb();
//             console.log("req.body: "+JSON.stringify(req.body));
//
//             const {address_id} = req.body.data;
//
//             console.log("ADDRESS ID: "+JSON.stringify( address_id));
//             const user_id = '655609014186e2628008b45d';
//             const user = await UserModel.findById(user_id);
//             const activeAddressIndex = user.address.findIndex((address) => address._id == address_id);
//
//             if (activeAddressIndex === -1) {
//                 return res.status(404).json({error: 'Address not found'});
//             }
//
//             for (let i = 0; i < user.address.length; i++) {
//                 if (i === activeAddressIndex) {
//                     user.address[i].active = true;
//                 } else {
//                     user.address[i].active = false;
//                 }
//             }
//
//             await UserModel.findByIdAndUpdate(user_id, user);
//             res.status(200).json({addresses: user.address});
//
//             db.disconnectDb();
//         } catch (e) {
//             return res.status(500).json({message: e.message});
//         }
//     })
//
// router
//     .delete(async (req, res) => {
//
//         try {
//             await db.connectDb();
//
//             const { address_id } = req.body;
//             console.log("ADDRESS ID: "+JSON.stringify( address_id));
//             const user_id = '655609014186e2628008b45d';
//             console.log("USER ID: "+JSON.stringify( user_id));
//             const user = await UserModel.findById(user_id);
//
//             console.log(user.address);
//             await UserModel.findByIdAndUpdate(
//                 user_id,
//                 { $pull: { address: { _id: address_id } } }
//             );
//
//             const newAddress = user.address.filter((address) => address._id != address_id);
//             console.log("NEW ADDRESS AFTER DELETE: "+JSON.stringify( newAddress));
//
//             res.status(200).json({addresses: newAddress});
//
//             db.disconnectDb();
//         } catch (e) {
//             return res.status(500).json({message: e.message});
//         }
//     })
//
// export default router.handler()
