import axios from "axios";

export const saveCart= async (cart: any) => {
    try{
        const {data} = await axios.post("/api/cart/saveCart", {cart});


        return data;
    }catch (error: any) {
        return error.response.data.message;
    }
}
