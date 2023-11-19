import mongoose, {model} from "mongoose";

const {ObjectId} = mongoose.Schema;



// Define the UserModel model
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: "Please enter your full name.",
        },
        email: {
            type: String,
            required: "Please enter your email address.",
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: '"Please enter a password.',
        },
        role: {
            type: String,
            default: "user",
        },
        image: {
            type: String,
            default:
                "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png",
        },
        emailVerified: {
            type: Boolean,
            default: false,
        },
        defaultPaymentMethod: {
            type: String,
            default: "",
        },
        address: [
            {
                firstName: {
                    type: String,
                },
                lastName: {
                    type: String,
                },
                phoneNumber: {
                    type: String,
                },
                email: {
                    type: String,
                },
                country: {
                    type: String,
                },
                city: {
                    type: String,
                },
                district:{
                    type: String,
                },
                ward: {
                    type: String,
                },
                address1: {
                    type: String,
                },
                zipCode: {
                    type: String,
                },
                active: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
        wishlist: [
            {
                product: {
                    type: ObjectId,
                    ref: "Product",
                },
                style: {
                    type: String,
                },
            },
        ],
    },
    {
        collection: "users",
        timestamps: true,
    }
);





const UserModel = mongoose.models.User || mongoose.model("User", userSchema);


export default UserModel;


