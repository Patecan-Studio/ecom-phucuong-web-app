import React from "react";
import { OverviewMaterialsProps } from "./types";

const OverviewMaterials = ({
  materials,
  selectedMaterial,
  onMaterialSelect,
}: OverviewMaterialsProps) => {
  return (
    <div className="overview__about__list">
      <h5 className="overview__about__list__title">Chất liệu</h5>
      <div className="overview__about__items">
        {materials.map((item) => (
          <button
            className={`overview__about__item ${
              selectedMaterial === item && "active"
            }`}
            key={item}
            onClick={() => onMaterialSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OverviewMaterials;
