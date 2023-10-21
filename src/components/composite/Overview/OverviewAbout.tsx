import React from "react";
import "./style.scss";
import { OverviewAboutProps } from "./types";

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
}: OverviewAboutProps) => {
  return (
    <div className="overview__about">
      <div>
        <h4 className="overview__about__title">VỀ SẢN PHẨM</h4>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Chất liệu</h5>
        <div className="overview__about__items">
          {materials.map((item: any) => (
            <p
              className={`overview__about__item ${
                selectedMaterial === item && "active"
              }`}
              key={item}
              onClick={() => onMaterialSelect(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Màu sắc</h5>
        <div className="overview__about__items">
          {colors.map((item: any) => (
            <div
              className={`overview__about__item ${
                selectedColor === item.value && "active"
              }`}
              key={item.value}
              onClick={() => onColorSelect(item.value)}
            >
              <div
                className="square-color"
                style={{
                  background: item.value,
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                }}
              ></div>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Chiều dài</h5>
        <div className="overview__about__items">
          <p className="overview__about__item no-border">{length}</p>
        </div>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Chiều rộng</h5>
        <div className="overview__about__items">
          <p className="overview__about__item no-border">{width}</p>
        </div>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Chiều cao</h5>
        <div className="overview__about__items">
          <p className="overview__about__item no-border">{height}</p>
        </div>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Cân nặng</h5>
        <div className="overview__about__items">
          <p className="overview__about__item no-border">{weight}</p>
        </div>
      </div>

      <div className="overview__about__reset" onClick={onResetVariant}>
        Reset
      </div>
    </div>
  );
};

export default OverviewAbout;
