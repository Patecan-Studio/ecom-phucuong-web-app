import styles from "./styles.module.scss";
import React, {useEffect, useState} from "react";

import {Form, Formik} from "formik";
import * as Yup from "yup";
import ShippingInput from "../shipping-input/ShippingInput";
import {Button, FormControl, Input, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {fetchData} from "./Utils";
import {FaIdCard, FaMapMarkerAlt} from "react-icons/fa";
import {GiPhone} from "react-icons/gi";
import {IoIosArrowDropupCircle, IoMdArrowDropdown, IoMdArrowDropupCircle} from "react-icons/io";
import {Simulate} from "react-dom/test-utils";
import {CiCircleRemove} from "react-icons/ci";
import {RiMapPinAddFill} from "react-icons/ri";
import {deleteAddress, saveAddress} from "@/backend/checkoutFunction";
import {AddressUtils} from "@/utils/AddressUtils";
import axios from "axios";


const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    country: "Việt Nam",
    city: "",
    district: "",
    ward: "",
    address1: "",
    zipCode: "",
}

interface ShippingProps {
    selectedAddress: any,
    setSelectedAddress: (address: any) => void,
    user: any,
    addresses: any[],
    setAddresses: any
}

export default function Shipping({selectedAddress, setSelectedAddress, user, addresses, setAddresses}: ShippingProps) {
    const [data, setData] = useState<any>();

    console.log("NEW ADDRESSES: ", addresses);

    //-----------------------------------------------------------------------------------------------------------------
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");
    const [selectedWard, setSelectedWard] = useState<string>("");
    const availableState = data?.find((c: any) => c.Name === selectedCity);
    const availableCities = availableState?.Districts?.find(
        (s: any) => s.Name === selectedDistrict
    );
    //-----------------------------------------------------------------------------------------------------------------

    const [visible, setVisible] = useState(user?.address.length ? false : true);
    const [shipping, setShipping] = useState(initialValues);

    let {
        firstName,
        lastName,
        phoneNumber,
        email,
        country,
        city,
        district,
        ward,
        address1,
        zipCode,
    } = shipping;


    useEffect(() => {
        fetchData(setData);
    }, []);

    const validate = Yup.object({
        firstName: Yup.string()
            .required("First name is required.")
            .min(2, "First name must be at least 2 characters long.")
            .max(20, "First name must be less than 20 characters long."),
        lastName: Yup.string()
            .required("Last name is required.")
            .min(2, "Last name must be at least 2 characters long.")
            .max(20, "Last name must be less than 20 characters long."),
        phoneNumber: Yup.string()
            .required("Phone number is required.")
            .min(6, "Phone number must be at least 6 characters long.")
            .max(15, "Phone number must be less than 20 characters long."),
        city: Yup.string()
            .required("City name is required.")
            .min(2, "City name should contain 2-60 characters.")
            .max(60, "City name should contain 2-60 characters."),
        address1: Yup.string()
            .required("Address Line 1 is required.")
            .min(4, "Address Line should contain 4-100 characters.")
            .max(100, "Address Line should contain 4-100 characters."),
    });

    //--------------------------------------------------------------------------------------------------------
    const handlerChange = (e: any) => {
        const {name, value} = e.target;
        console.log(name)
        setShipping({...shipping, [name]: value});
    }


    const saveNewAddressHandler = async () => {
        shipping.city = selectedCity;
        shipping.district = selectedDistrict;
        shipping.ward = selectedWard;
        const response = await axios.post("http://localhost:8080/api/v1/address", shipping);
        console.log("RESPONSE: "+ JSON.stringify(response.data.data.address));
        setAddresses(response.data.data.address);
    };

    const changeActiveAddressHandler = async (address_id: string) => {
        console.log("ADDRESS ID 0: "+ address_id);
        console.log("ALL ADDRESES NOW: "+ JSON.stringify(addresses));
        const newAddresses = AddressUtils.changeActiveAddress(addresses,address_id);
        setAddresses(newAddresses.addresses);
        //changeActiveAddress(address_id);

       const response = await axios.patch(`http://localhost:8080/api/v1/address/active/${address_id}`);
       console.log("RESPONSE: "+ JSON.stringify(response.data));
    };


    const deleteAddressHandler = async (address_id: string) => {
        const response = await axios.delete(`http://localhost:8080/api/v1/address/${address_id}`);
        console.log("RESPONSE: "+ JSON.stringify(response.data.data.address));
        setAddresses(response.data.data.address);
    };


    //--------------------------------------------------------------------------------------------------------



    return (
        <div className={styles.shipping}>
            <div className={styles.shipping__header}>
                <h1>Shipping Information</h1>
            </div>
            <div className={styles.addresses}>
                {
                    addresses.map((address) => (
                        <div key={address._id} style={{position: "relative"}}>
                            <div className={styles.address__delete} onClick={() => deleteAddressHandler(address._id)}>
                                <CiCircleRemove/>
                            </div>
                            <div
                                className={`${styles.address} ${address.active && styles.active}`}
                                onClick={async () => {
                                    setSelectedAddress(address);
                                    console.log("SELECT TO ACTIVE: " + address._id);
                                    await changeActiveAddressHandler(address._id)
                                }}
                            >
                                <div className={styles.address__col}>
                                <span>
                                    <FaIdCard/>
                                    {address.firstName.toUpperCase()}
                                    {address.lastName.toUpperCase()}
                                </span>
                                    <span>
                                    <GiPhone/>
                                        {address.phoneNumber}
                                </span>
                                </div>
                                <div className={styles.address__col}>
                                <span>
                                    <FaMapMarkerAlt/>
                                    {address.address1}, {address.ward}, {address.district}, {address.country}, {address.zipCode}
                                </span>
                                </div>
                                <span
                                    className={styles.active__text}
                                    style={{
                                        display: !address.active ? 'none' : 'block'
                                    }}
                                >
                                Active
                            </span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className={styles.hide_show} onClick={() => setVisible(!visible)}>
                {
                    visible
                        ? (<span><IoIosArrowDropupCircle style={{fontSize: '2rem', fill: '#f0f0f0'}}/></span>)
                        : (<span>Thêm địa chỉ giao hàng<RiMapPinAddFill/></span>)
                }
            </button>

            {
                visible &&
                <Formik
                    enableReinitialize
                    initialValues={{
                        firstName,
                        lastName,
                        phoneNumber,
                        email,
                        city,
                        district,
                        ward,
                        zipCode,
                        address1,
                        country,
                    }}
                    validationSchema={validate}
                    onSubmit={saveNewAddressHandler}
                >

                    {(formik) => (
                        <Form>
                            <div className={styles.col}>
                                <ShippingInput
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={handlerChange}
                                />
                                <ShippingInput
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={handlerChange}
                                />
                            </div>

                            <ShippingInput
                                name="email"
                                placeholder="Email"
                                onChange={handlerChange}
                            />
                            <div className={styles.col}>
                                <ShippingInput
                                    name="phoneNumber"
                                    placeholder="* Số điện thoại"
                                    onChange={handlerChange}
                                />
                                <ShippingInput
                                    name="zipCode"
                                    placeholder="Post/Zip Code"
                                    onChange={handlerChange}
                                />
                            </div>
                            <div className={`${styles.input} ${styles.input__wrapper}`}>
                                <input
                                    type="text"
                                    name="address1"
                                    placeholder="Address 1"
                                    onChange={handlerChange}/>
                            </div>

                            <div className={styles.col}>
                                <FormControl className={styles.select}>
                                    <InputLabel id={"demo-simple-select-helper-label"}>
                                        Tỉnh/Thành phố
                                    </InputLabel>
                                    <Select
                                        id={"demo-simple-select-helper"}
                                        labelId={"demo-simple-select-helper-label"}
                                        value={selectedCity}
                                        name={"city"}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                    >
                                        {
                                            data?.map((value: any, key: number) => {
                                                return (
                                                    <MenuItem value={value.Name} key={key}>
                                                        {value.Name}
                                                    </MenuItem>
                                                );
                                            })
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl className={styles.select}>
                                    <InputLabel id={"demo-simple-select-helper-label"}>
                                        Quận/Huyện
                                    </InputLabel>
                                    <Select
                                        id={"demo-simple-select-helper"}
                                        labelId={"demo-simple-select-helper-label"}
                                        value={selectedDistrict}
                                        name={"district"}
                                        onChange={(e) => setSelectedDistrict(e.target.value)}
                                    >
                                        {
                                            availableState?.Districts.map((e: any, key: number) => {
                                                return (
                                                    <MenuItem value={e.Name} key={key}>
                                                        {e.Name}
                                                    </MenuItem>
                                                );
                                            })
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl className={styles.select}>
                                    <InputLabel id={"demo-simple-select-helper-label"}>
                                        Xã/Phường
                                    </InputLabel>
                                    <Select
                                        id={"demo-simple-select-helper"}
                                        labelId={"demo-simple-select-helper-label"}
                                        value={selectedWard}
                                        name={"ward"}
                                        onChange={(e) => setSelectedWard(e.target.value)}
                                    >
                                        {
                                            availableCities?.Wards.map((e: any, key: number) => {
                                                return (
                                                    <MenuItem value={e.Name} key={key}>
                                                        {e.Name}
                                                    </MenuItem>
                                                );
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <Button type="submit" variant="contained" color="primary"
                                onClick={() => saveNewAddressHandler()}
                            >
                                Save Address
                            </Button>
                        </Form>
                    )}
                </Formik>
            }


        </div>
    );
}
