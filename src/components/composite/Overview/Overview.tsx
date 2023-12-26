"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";
import OverviewQuantity from "./OverviewQuantity";
import OverviewPolicy from "./OverviewPolicy";
import OverviewAbout from "./OverviewAbout";
import { OverviewProps } from "./types";
import OverviewButtons from "./OverviewButtons";

function doubleDictionary(t: any) {
  const dictionary: { [key: string]: string[] } = Object.create(null);

  for (let i = 0; i < t.length; i++) {
    const variant = t[i];
    const material = variant.material;
    const color = variant.metadata.color.value;
    const measurement = variant.measurement;

    if (!dictionary[material]) {
      dictionary[material] = [color, measurement];
    } else {
      dictionary[material].push(color);
      dictionary[material].push(measurement);
    }

    if (!dictionary[color]) {
      dictionary[color] = [material, measurement];
    } else {
      dictionary[color].push(material);
      dictionary[color].push(measurement);
    }

    if (!dictionary[measurement]) {
      dictionary[measurement] = [material, color];
    } else {
      dictionary[measurement].push(material);
      dictionary[measurement].push(color);
    }
  }
  return dictionary;
}

const Overview = ({ data }: OverviewProps) => {
  const [overviewData, setOverviewData] = React.useState(
    JSON.parse(JSON.stringify(data.product_variants[0]))
  );

  const [selectedMaterial, setSelectedMaterial] = useState(
    overviewData?.material || ""
  );
  const [selectedColor, setSelectedColor] = useState(overviewData?.color || "");
  const [selectedMeasurement, setSelectedMeasurement] = useState(overviewData?.measurement || "");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    handleMaterialChange();
  }, [selectedMaterial]);

  useEffect(() => {
    handleColorChange();
  }, [selectedColor]);

  useEffect(() => {
    handleMeasurementChange();
  }, [selectedMeasurement]);

  let dictionary: { [key: string]: string[] } = Object.create(null);
  dictionary = doubleDictionary(data.product_variants);

  const materials = data.product_variants
    .map((item) => item.material)
    .filter((value, index, self) => self.indexOf(value) === index);

  const colors = data.product_variants
    .map((item) => item.metadata.color)
    .filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (sub_item) =>
            sub_item.label === item.label && sub_item.value === item.value
        )
    );

  const measurements = data.product_variants
    .map((item) => item.measurement)
    .filter((value, index, self) => self.indexOf(value) === index);

  const warranty = data.product_warranty;

  const handleMaterialChange = () => {
    const newOverviewData = data.product_variants.find(
      (item) =>
        item.material === selectedMaterial
    );
    if (newOverviewData) {
      setOverviewData(newOverviewData);
      setSelectedColor(newOverviewData.color);
      setSelectedMeasurement(newOverviewData.measurement);
      setSelectedQuantity(1);
    }
  }

  const handleColorChange = () => {
    const newOverviewData = data.product_variants.find(
      (item) =>
        item.color === selectedColor
    );
    if (newOverviewData) {
      setOverviewData(newOverviewData);
      setSelectedMaterial(newOverviewData.material);
      setSelectedMeasurement(newOverviewData.measurement);
      setSelectedQuantity(1);
    }
  }

  const handleMeasurementChange = () => {
    const newOverviewData = data.product_variants.find(
      (item) =>
        item.measurement === selectedMeasurement
    );
    if (newOverviewData) {
      setOverviewData(newOverviewData);
      setSelectedMaterial(newOverviewData.material);
      setSelectedColor(newOverviewData.color);
      setSelectedQuantity(1);
    }
  }

  const handleResetVariant = () => {
    setOverviewData(JSON.parse(JSON.stringify(data.product_variants[0])));
    setSelectedMaterial(materials[0]);
    setSelectedColor(colors[0].value);
    setSelectedMeasurement(measurements[0]);
  };

  const handleSelectMaterial = (material: string) => {
    setSelectedMaterial(material);
  };

  const handleSelectColor = (colorValue: string) => {
    setSelectedColor(colorValue);
  };

  const handleSelectMeasurement = (measurement: string) => {
    setSelectedMeasurement(measurement);
  }

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
        <OverviewPolicy />
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
          brandImage={
            overviewData ? data.product_brand?.brand_logoUrl || "" : ""
          }
          brandName={overviewData ? data.product_brand?.brand_name || "" : ""}
          quantity={overviewData?.quantity || 0}
          categories={data.product_categories.slice(0, 3)}
          warranty={warranty}
        />
        <div className="overview__order">
          <div className="overview__order__left">
            <OverviewAbout
              onResetVariant={handleResetVariant}
              onMaterialSelect={handleSelectMaterial}
              onColorSelect={handleSelectColor}
              onMeasurementSelect={handleSelectMeasurement}
              selectedMaterial={selectedMaterial}
              selectedColor={selectedColor}
              selectedMeasurement={selectedMeasurement}
              materials={materials}
              colors={colors}
              measurements={measurements}
              dictionary={dictionary}
            />
            <OverviewQuantity
              isDisabled={overviewData === undefined}
              quantity={selectedQuantity}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
          </div>
        </div>
        <OverviewButtons />
      </div>
    </div>
  );
};

export default Overview;
