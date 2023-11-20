import mongoose, { model, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { ProductVariantStatus } from "@/models/Product.model";

const cartSchema = new mongoose.Schema(
  {
    productsList: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        sku: { type: String },
        product_brand_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Brand",
        },
        product_category_ids: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
          },
        ],
        product_name: { type: String },
        product_slug: { type: String },
        product_variant_image: { type: String },
        product_weight: { type: String },
        product_height: { type: String },
        product_width: { type: String },
        product_length: { type: String },
        product_size_unit: { type: String },
        variant: {
          sku: String,
          color: {
            type: Schema.Types.Mixed,
            default: null,
            label: { type: String },
            value: { type: String },
          },
          material: String,
          price: Number,
          discount_price: Number,
          discount_percentage: Number,
          quantity: Number,
          image_list: [
            {
              imageName: String,
              imageUrl: String,
            },
          ],
          status: {
            type: String,
            default: ProductVariantStatus.Active,
            required: false,
          },
        },
        product_warranty: { type: String },
        qty: { type: Number },
        price: { type: Number },
        discount_price: { type: Number },
        discount_percentage: { type: Number },
        totalAfterDiscount: { type: Number },
      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    collection: "carts",
    timestamps: true,
  }
);

const CartModel = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default CartModel;
