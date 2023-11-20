"use client";

import React, {useEffect, useState} from "react";
import "./style.scss";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";
import OverviewQuantity from "./OverviewQuantity";
import OverviewPolicy from "./OverviewPolicy";
import OverviewAbout from "./OverviewAbout";
import {OverviewProps} from "./types";
import OverviewButtons from "./OverviewButtons";
import {useAppDispatch} from "@/store/store";
import {useSelector} from "react-redux";
import {addToCart, cartState} from "@/store/cartSlice";

function doubleDictionary(t: any) {
    const dictionary: {
        [key: string]: string[]
    } = Object.create(null);

    for (let i = 0; i < t.length; i++) {
        const variant = t[i];
        const material = variant.material;
        const color = variant.color.value;

        if (!dictionary[material]) {
            dictionary[material] = [color];
        } else {
            dictionary[material].push(color);
        }

        if (!dictionary[color]) {
            dictionary[color] = [material];
        } else {
            dictionary[color].push(material);
        }
    }
    return dictionary;
}

const Overview = ({data}: OverviewProps) => {
    const [overviewData, setOverviewData] = React.useState(
        JSON.parse(JSON.stringify(data.product_variants[0]))
    );

    console.log("DATA: " + JSON.stringify(data));
    console.log("OVERVIEW DATA: " + JSON.stringify(overviewData));

    //--------------------------------------- CART ---------------------------------------
    const dispatch = useAppDispatch();
    const cart = useSelector(cartState);
    console.log(cart.cartItems);

    //------------------------------------------------------------------------------------
    const [error, setError] = useState("");
    const [categories, setCategories] = useState(data.product_categories);

    let dictionary: {
        [key: string]: string[]
    } = Object.create(null);

    const [selectedMaterial, setSelectedMaterial] = useState(
        overviewData?.material || ""
    );
    const [selectedColor, setSelectedColor] = useState(
        overviewData?.color?.value || ""
    );
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const isShowMaterial = overviewData?.material
        ? overviewData.material !== "null" && overviewData.material !== null
        : false;
    const isShowColor = overviewData?.color
        ? overviewData.color !== "null" && overviewData.color !== null
        : false;

    if (isShowMaterial && isShowColor) {
        dictionary = doubleDictionary(data.product_variants);
    }

    useEffect(() => {
        if (isShowMaterial && isShowColor) {
            if (dictionary[selectedMaterial][0] !== selectedColor) {
                setSelectedColor(dictionary[selectedMaterial][0]);
            }
        }
    }, [selectedMaterial]);

    const materials = isShowMaterial
        ? data.product_variants
            .map((item) => item.material)
            .filter((value, index, self) => self.indexOf(value) === index)
        : [];
    const colors = isShowColor
        ? data.product_variants
            .map((item) => item.color)
            .filter(
                (item, index, self) =>
                    index ===
                    self.findIndex(
                        (sub_item) =>
                            sub_item.label === item.label && sub_item.value === item.value
                    )
            )
        : [];

    const length = data.product_length + data.product_size_unit;
    const height = data.product_height + data.product_size_unit;
    const width = data.product_width + data.product_size_unit;
    const weight = data.product_weight?.value + data.product_weight?.unit;
    const warranty = data.product_warranty;

    const handleVariantChange = () => {
        const newOverviewData = data.product_variants.find(
            (item) =>
                item.color?.value === selectedColor &&
                item.material === selectedMaterial
        );
        if (newOverviewData) {
            setOverviewData(newOverviewData);
            setSelectedQuantity(1);
        }
    };

    const handleVariantChangeMaterialNull = () => {
        const newOverviewData = data.product_variants.find(
            (item) => item.color?.value === selectedColor
        );
        setOverviewData(newOverviewData);
        setSelectedQuantity(1);
    };

    const handleVariantChangeColorNull = () => {
        const newOverviewData = data.product_variants.find(
            (item) => item.material === selectedMaterial
        );
        setOverviewData(newOverviewData);
        setSelectedQuantity(1);
    };

    useEffect(() => {
        isShowColor && isShowMaterial && handleVariantChange();
    }, [selectedMaterial, selectedColor]);

    useEffect(() => {
        if (!isShowMaterial && isShowColor) {
            handleVariantChangeMaterialNull();
        }
    }, [selectedColor]);

    useEffect(() => {
        if (isShowMaterial && !isShowColor) {
            handleVariantChangeColorNull();
        }
    }, [selectedMaterial]);

    const handleResetVariant = () => {
        setOverviewData(JSON.parse(JSON.stringify(data.product_variants[0])));
        setSelectedMaterial(materials[0]);
        setSelectedColor(colors[0].value);
    };

    const handleSelectMaterial = (material: string) => {
        setSelectedMaterial(material);
    };

    const handleSelectColor = (colorValue: string) => {
        setSelectedColor(colorValue);
    };

    const handleDecreaseQuantity = () => {
        if (selectedQuantity === 1) return;
        setSelectedQuantity((prev) => prev - 1);
    };

    const handleIncreaseQuantity = () => {
        if (selectedQuantity === overviewData.quantity) return;
        setSelectedQuantity((prev) => prev + 1);
    };


    //------------------------------- CART HANDLER--------------------------------
    const addToCartHandler = async () => {

        if (!overviewData) {
            setError("Please Select a variant.");
            return;
        }

        const product = {...data, variant: overviewData, _uid: overviewData.sku}


        if (product.variant.quantity < 1) {
            setError("This Product is out of stock.");
        } else {
            dispatch(addToCart(product))
        }



    }


    //---------------------------------------------------------------------


    return (
        <div className="overview">
            <div className="overview__left">
                <OverviewImage overviewData={overviewData}/>
                <OverviewPolicy/>
            </div>
            <div className="overview__right">
                <OverviewInfo
                    name={
                        overviewData ? data.product_name : "Hiện tại sản phẩm này chưa có"
                    }
                    price={overviewData?.price || 0}
                    discountPrice={overviewData?.discount_price || 0}
                    discountPercentage={overviewData?.discount_percentage || 0}
                    productCode={overviewData?.sku || ""}
                    brandImage={overviewData ? data.product_brand?.brand_logoUrl || "" : ""}
                    brandName={overviewData ? data.product_brand?.brand_name || "" : ""}
                    quantity={overviewData?.quantity || 0}
                    categories={categories.slice(0, 3)}
                    warranty={warranty}
                />
                <div className="overview__order">
                    <div className="overview__order__left">
                        <OverviewAbout
                            onResetVariant={handleResetVariant}
                            onMaterialSelect={handleSelectMaterial}
                            onColorSelect={handleSelectColor}
                            selectedMaterial={selectedMaterial}
                            selectedColor={selectedColor}
                            materials={materials}
                            colors={colors}
                            length={length}
                            width={width}
                            height={height}
                            weight={weight}
                            isShowMaterial={isShowMaterial}
                            isShowColor={isShowColor}
                            dictionary={dictionary}
                        />


                        <div className="overview__quantity">
                            <h4 className="overview__quantity__title">SỐ LƯỢNG</h4>
                            <div className="overview__quantity__content">
                                <div className="overview__quantity__input">
                                    <button
                                        className="overview__quantity__decrease"
                                        onClick={handleDecreaseQuantity}
                                        disabled={overviewData === undefined}
                                    ></button>
                                    <input
                                        className="overview__quantity__value"
                                        value={selectedQuantity}
                                        readOnly
                                    />
                                    <button
                                        className="overview__quantity__increase"
                                        onClick={handleIncreaseQuantity}
                                        disabled={overviewData === undefined}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overview__buttons">
                    <button className="overview__button">MUA NGAY</button>
                    <button className="overview__button">
                        TRẢ GÓP 0% QUA THẺ
                        <span>Visa, Mastercard, JCB</span>
                    </button>
                    <div className="overview__call">
                        <button
                            className="overview__addToCart"
                            onClick={addToCartHandler}
                        >THÊM VÀO GIỎ HÀNG
                        </button>
                    </div>
                    <div className="overview__call">
                        <p className="overview__call--bold">Gọi đặt mua</p>
                        <a href="tel:+18001060" className="overview__call__number">
                            1800.1060
                        </a>
                        <p>(8:00 - 17:30)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
