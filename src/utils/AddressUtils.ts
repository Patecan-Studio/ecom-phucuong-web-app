import UserModel from "@/models/User.model";

export class AddressUtils{

    static changeActiveAddress(originalAddresses: any,address_id: string){

        const activeAddressIndex = originalAddresses.findIndex((address: any) => address._id == address_id);

        if (activeAddressIndex === -1) {
            return originalAddresses;
        }

        for (let i = 0; i < originalAddresses.length; i++) {
            if (i === activeAddressIndex) {
                originalAddresses[i].active = true;
            } else {
                originalAddresses[i].active = false;
            }
        }

        return {addresses: originalAddresses};

    }
}
