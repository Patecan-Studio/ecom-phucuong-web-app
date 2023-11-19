import db from "@/utils/db";
import UserModel from "@/models/User.model";
import CartModel from "@/models/Cart.model";

export async function getData(setData: any) {
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

    setData( {
            cart: JSON.parse(JSON.stringify(cart)),
            user: JSON.parse(JSON.stringify(user))

    })
}
