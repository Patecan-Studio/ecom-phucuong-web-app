"use client"; // need to delete this

import React from "react";
import "./style.scss";
import { OverviewProps } from "./types";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";
import OverviewQuantity from "./OverviewQuantity";
import OverviewButtons from "./OverviewButtons";
import OverviewPolicy from "./OverviewPolicy";
import OverviewAbout from "./OverviewAbout";

// TODO: leave to any for now
const Overview = ({ data }: any) => {
  const [overviewData, setOverviewData] = React.useState(
    JSON.parse(JSON.stringify(data.product_variants[0]))
  );

  const materials = data.product_variants
    .map((item: any) => item.material)
    .filter(
      (value: any, index: any, self: any) => self.indexOf(value) === index
    );

  const colors = data.product_variants
    .map((item: any) => item.color)
    .filter(
      (item: any, index: number, self: any) =>
        index ===
        self.findIndex(
          (sub_item: any) =>
            sub_item.label === item.label && sub_item.value === item.value
        )
    );

  const [selectedMaterial, setSelectedMaterial] = React.useState(materials[0]);
  const [selectedColor, setSelectedColor] = React.useState(colors[0].value);

  const length = data.product_length + data.product_size_unit[0];
  const height = data.product_height + data.product_size_unit[0];
  const width = data.product_width + data.product_size_unit[0];
  const weight = data.product_weight.value + data.product_weight.unit[0];

  const handleVariantChange = () => {
    const newOverviewData = data.product_variants.find(
      (item: any) =>
        item.material === selectedMaterial || item.color === selectedColor
    );
    setOverviewData(newOverviewData);
  };

  const handleResetVariant = () => {
    setOverviewData(JSON.parse(JSON.stringify(data.product_variants[0])));
    setSelectedMaterial(materials[0]);
    setSelectedColor(colors[0].value);
  };

  const handleSelectMaterial = (material: any) => {
    setSelectedMaterial(material);
    handleVariantChange();
  };

  const handleSelectColor = (colorValue: any) => {
    setSelectedColor(colorValue);
    handleVariantChange();
  };

  console.log("selectedMaterial", selectedMaterial);
  console.log("selectedColor", selectedColor);

  return (
    <div className="overview">
      <div className="overview__left">
        <OverviewImage overviewData={overviewData} />
        <OverviewPolicy className="on-mobile" />
      </div>
      <div className="overview__right">
        <OverviewInfo
          name={data.product_name}
          price={overviewData.price}
          discountPrice={overviewData.discount_price}
          discountPercentage={overviewData.discount_percentage}
          productCode={overviewData.sku}
          brand={data.product_brand?.brand_name}
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
            <OverviewQuantity quantity={overviewData.quantity} />
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
