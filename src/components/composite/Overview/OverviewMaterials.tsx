import React from "react";

const OverviewMaterials = ({
  materials,
  dictionary,
  selectedMaterial,
  selectedColor,
  onMaterialSelect,
}: any) => {
  return (
    <div className="overview__about__list">
      <h5 className="overview__about__list__title">Chất liệu</h5>
      <div className="overview__about__items">
        {materials.map((item: any) => (
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
