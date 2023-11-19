import {createRouter} from "next-connect"
import db from "../../../utils/db";
import UserModel from "../../../models/User.model";



const router = createRouter()
router
    .post(async (req, res) => {

    try {
        await db.connectDb();

        const {address} = req.body;
        const user_id = '655609014186e2628008b45d';
        console.log("address: "+JSON.stringify(address));
        const user = await UserModel.findById(user_id);
        console.log("user: "+JSON.stringify(user));


        const options = {
            returnDocument: 'after', // This option returns the updated document
        };

        const updatedDocument = await User.findOneAndUpdate({_id: user_id}, {$push: {address: address}}, options);
        console.log("updatedDocument: "+JSON.stringify(updatedDocument));
        res.status(200).json({addresses: updatedDocument.address});

        db.disconnectDb();
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
})
export default router.handler()
