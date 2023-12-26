import axios from "axios";

export const saveAddress= async (address: any) => {
    try{
        const {data} = await axios.post("http://localhost:8080/api/v1/address", address);
        console.log("SAVED ADDRESS: "+JSON.stringify(data));
        return data;
    }catch (error: any) {
        return error.response.data.message;
    }
}

export const changeActiveAddress= async (address_id: string) => {
    try{
        const {data} = await axios.put("/api/checkout/updateAddress", {data: { address_id }});
        return data;
    }catch (error: any) {
        return error.response.data.message;
    }
}


export const deleteAddress= async (address_id: string) => {
    try{
        const {data} = await axios.delete("/api/checkout/updateAddress", {
            data: { address_id },
        });

        return data;
    }catch (error: any) {
        return error.response.data.message;
    }
}
