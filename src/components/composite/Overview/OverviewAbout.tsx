import React from "react";
import "./style.scss";
import { OverviewAboutProps } from "./types";
import OverviewSpecifications from "./OverviewSpecifications";

const OverviewAbout = ({
  materials,
  colors,
  width,
  length,
  height,
  weight,
  onResetVariant,
  onMaterialSelect,
  onColorSelect,
  selectedMaterial,
  selectedColor,
  dictionary,
}: OverviewAboutProps) => {
  return (
    <>
      <div className="overview__about">
        <div className="overview__about__title">
          <h4>THÔNG TIN SẢN PHẨM</h4>
          <div className="overview__about__reset" onClick={onResetVariant}>
            Reset
          </div>
        </div>
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
        <div className="overview__about__list">
          <h5 className="overview__about__list__title">Màu sắc</h5>
          <div className="overview__about__items">
            {colors.map((item: any) => (
              <button
                className={`overview__about__item ${
                  selectedColor === item.value &&
                  dictionary[item.value]?.includes(selectedMaterial) &&
                  "active"
                }`}
                key={item.value}
                onClick={() => onColorSelect(item.value)}
                disabled={
                  !dictionary[item.value]?.includes(selectedMaterial)
                }
              >
                <div
                  className="square-color"
                  style={{
                    background: item.value.split(",")[0],
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                  }}
                ></div>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <OverviewSpecifications
        height={height}
        width={width}
        weight={weight}
        length={length}
      />
    </>
  );
};

export default OverviewAbout;
