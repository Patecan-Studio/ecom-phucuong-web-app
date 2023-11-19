import {createRouter} from "next-connect"
import {NextApiRequest, NextApiResponse} from 'next';

// import UserModel from "../../../models/UserModel";
// import CartModel from "../../../models/CartModel";
// import Product from "../../../models/Product";
import db from "@/utils/db";
import UserModel from "@/models/User.model";
import CartModel from "@/models/Cart.model";
import ProductModel from "@/models/Product.model";

interface CartInCheckout {
    user?: string,
    products?: [],
    cartTotal?: number,
    totalAfterDiscount?: number,
}

interface ProductInCheckout {
    product_id?: string,
    sku?: string,
    product_brand_id?: string,
    product_category_ids?: string[],
    product_name?: string,
    product_slug?: string,
    product_variant_image?: string,
    //-----> Effect Shipping
    product_weight?: string,
    product_height?: number,
    product_width?: number,
    product_length?: number,
    product_size_unit?: string,
    variant?: object,
    product_warranty?: string,
    qty?: number,
    price?: number,
    discount_price?: number,
    discount_percentage?: number,
    totalAfterDiscount?: number,
}


const router = createRouter<NextApiRequest, NextApiResponse>()
router
    .post(async (req: NextApiRequest, res: NextApiResponse) => {

        try {
            await db.connectDb();
            console.log('Step 1');

            const {cart} = req.body;
            const user_id = '655609014186e2628008b45d';
            // console.log('1.1: ' + req.user);
            let productsListInCheckout: ProductInCheckout[] = [];
            const user = await UserModel.findById(user_id);
            console.log("Step 2: " + JSON.stringify(user));

            let existingCart = await CartModel.findOne({user: user_id});
            if (existingCart) {
                await CartModel.findOneAndUpdate({user: user_id}, cart);
            }
            console.log('Step 3');

            for (let i = 0; i < cart.length; i++) {
                let dbProduct: any = await ProductModel.findById(cart[i]._id).lean();
                console.log('Step 4: ' + JSON.stringify(dbProduct));

                let variant = dbProduct.product_variants.find((v: any) => v.sku === cart[i]._uid);
                console.log('Step 4.1: ' + JSON.stringify(variant));
                let tempProduct: ProductInCheckout = {};

                tempProduct.product_id = dbProduct._id;
                console.log('Step 5.1: ' + JSON.stringify(tempProduct));
                tempProduct.sku = variant.sku;
                console.log('Step 5.2: ' + JSON.stringify(tempProduct));
                tempProduct.product_brand_id = dbProduct.product_brand;
                tempProduct.product_category_ids = dbProduct.product_categories.map((c) => c._id);
                tempProduct.product_name = dbProduct.product_name;
                tempProduct.product_slug = dbProduct.product_slug;
                tempProduct.product_variant_image = variant.image_list[0].imageUrl;
                console.log('Step 5.3: ' + JSON.stringify(tempProduct));
                tempProduct.product_weight = `${dbProduct.product_weight.value} ${dbProduct.product_weight.unit}`;
                tempProduct.product_width = dbProduct.product_width;
                tempProduct.product_length = dbProduct.product_length;
                tempProduct.product_height = dbProduct.product_height;
                tempProduct.product_size_unit = dbProduct.product_size_unit;
                console.log('Step 5.4: ' + JSON.stringify(tempProduct));
                tempProduct.variant = variant;
                tempProduct.product_warranty = dbProduct.product_warranty;
                console.log('Step 5.5: ' + JSON.stringify(tempProduct));
                tempProduct.qty = Number(cart[i].qty);
                tempProduct.price = variant.price;
                tempProduct.discount_price = variant.discount_price;
                tempProduct.discount_percentage = variant.discount_percentage;

                productsListInCheckout.push(tempProduct);
            }

            console.log('Step 5: ' + JSON.stringify(productsListInCheckout));

            let cartTotal = 0;

            for (let i = 0; i < productsListInCheckout.length; i++) {
                cartTotal += (productsListInCheckout[i].price * productsListInCheckout[i].qty);
            }
            console.log('Step 6: ' + cartTotal);


            let cartTotalAfterDiscount=cartTotal;

            for (let i = 0; i < productsListInCheckout.length; i++) {
                cartTotalAfterDiscount += (productsListInCheckout[i].discount_price * productsListInCheckout[i].qty);
            }
            console.log('Step 7: ' + cartTotalAfterDiscount);

            const raw = new CartModel({
                productsList: productsListInCheckout,
                cartTotal: cartTotal,
                totalAfterDiscount: cartTotalAfterDiscount,
                user: user_id
            });

            const result = await raw.save()

            return res.status(200).json({status: 200, message: 'success', data: result});


            await db.disconnectDb();
        } catch (e: any) {
            return res.status(500).json({message: e.message});
        }
    })
export default router.handler()
