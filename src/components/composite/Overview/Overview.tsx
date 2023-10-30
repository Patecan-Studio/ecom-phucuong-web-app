"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";
import OverviewQuantity from "./OverviewQuantity";
import OverviewButtons from "./OverviewButtons";
import OverviewPolicy from "./OverviewPolicy";
import OverviewAbout from "./OverviewAbout";
import { OverviewProps } from "./types";

function doubleDictionary(t: any) {
  const dictionary: { [key: string]: string[] } = Object.create(null);

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

const Overview = ({ data }: OverviewProps) => {
  const [overviewData, setOverviewData] = React.useState(
    JSON.parse(JSON.stringify(data.product_variants[0]))
  );

  const [categories, setCategories] = useState(data.product_categories);

  const [enabledButtons, setEnabledButtons] = useState({});
  let dictionary: { [key: string]: string[] } = Object.create(null);

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

  return (
    <div className="overview">
      <div className="overview__left">
        <OverviewImage overviewData={overviewData} />
        <OverviewPolicy className="on-mobile" />
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
          brand={overviewData ? data.product_brand?.brand_name || "" : ""}
          quantity={overviewData?.quantity || 0}
          categories={categories.slice(0, 3)}
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
            />
            <OverviewQuantity
              isDisabled={overviewData === undefined}
              quantity={selectedQuantity}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
            <OverviewButtons />
          </div>
          <div className="overview__order__right">
            <OverviewPolicy className="on-desktop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
