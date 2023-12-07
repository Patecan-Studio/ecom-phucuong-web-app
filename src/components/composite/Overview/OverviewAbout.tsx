import React from "react";
import "./style.scss";
import { OverviewAboutProps } from "./types";
import OverviewMeasurements from "./OverviewMeasurements";
import OverviewColors from "./OverviewColors";
import OverviewMaterials from "./OverviewMaterials";

const OverviewAbout = ({
  materials,
  colors,
  measurements,
  onResetVariant,
  onMaterialSelect,
  onColorSelect,
  onMeasurementSelect,
  selectedMaterial,
  selectedColor,
  selectedMeasurement,
  dictionary,
}: OverviewAboutProps) => {
  return (
    <div className="overview__about">
      <div className="overview__about__title">
        <h4>THÔNG TIN SẢN PHẨM</h4>
        <div className="overview__about__reset" onClick={onResetVariant}>
          Reset
        </div>
      </div>
      <OverviewMaterials
        materials={materials}
        selectedMaterial={selectedMaterial}
        onMaterialSelect={onMaterialSelect}
      />
      <OverviewColors
        colors={colors}
        dictionary={dictionary}
        selectedMaterial={selectedMaterial}
        selectedColor={selectedColor}
        onColorSelect={onColorSelect}
      />
      <OverviewMeasurements
        measurements={measurements}
        dictionary={dictionary}
        selectedMaterial={selectedMaterial}
        selectedColor={selectedColor}
        selectedMeasurement={selectedMeasurement}
        onMeasurementSelect={onMeasurementSelect}
      />
    </div>
  );
};

export default OverviewAbout;
