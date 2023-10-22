"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import { OverviewProps } from "./types";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";
import OverviewQuantity from "./OverviewQuantity";
import OverviewButtons from "./OverviewButtons";
import OverviewPolicy from "./OverviewPolicy";
import OverviewAbout from "./OverviewAbout";

// TODO: leave to any for now
const Overview = ({ data }: OverviewProps) => {
  console.log(data);
  const [overviewData, setOverviewData] = React.useState(
    JSON.parse(JSON.stringify(data.product_variants[0]))
  );

  const materials = data.product_variants
    .map((item) => item.material)
    .filter(
      (value, index, self) => self.indexOf(value) === index
    );

  const colors = data.product_variants
    .map((item) => item.color)
    .filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (sub_item) =>
            sub_item.label === item.label && sub_item.value === item.value
        )
    );

  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const length = data.product_length + data.product_size_unit[0];
  const height = data.product_height + data.product_size_unit[0];
  const width = data.product_width + data.product_size_unit[0];
  const weight = data.product_weight.value + data.product_weight.unit[0];

  const handleVariantChange = () => {
    const newOverviewData = data.product_variants.find(
      (item) =>
        item.material === selectedMaterial && item.color.value === selectedColor
    );
    setOverviewData(newOverviewData);
    setSelectedQuantity(1);
  };

  useEffect(() => {
    handleVariantChange();
  }, [selectedMaterial, selectedColor]);

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
          name={overviewData ? data.product_name : "Hiện tại sản phẩm này chưa có"}
          price={overviewData?.price || 0}
          discountPrice={overviewData?.discount_price || 0}
          discountPercentage={overviewData?.discount_percentage || 0}
          productCode={overviewData?.sku || ""}
          brand={overviewData ? (data.product_brand?.brand_name || "") : ""}
          quantity={overviewData?.quantity || 0}
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
