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
  isShowMaterial,
  isShowColor,
  dictionary,
}: OverviewAboutProps) => {
  return (
    <div className="overview__about">
      <div className="overview__about__title">
        <h4>VỀ SẢN PHẨM</h4>
        <div className="overview__about__reset" onClick={onResetVariant}>
          Reset
        </div>
      </div>
      {isShowMaterial && (
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
      )}
      <div className="overview__about__list">
        {isShowColor ? (
          <>
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
                    dictionary[item.value] === undefined
                      ? false
                      : !dictionary[item.value].includes(selectedMaterial)
                  }
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
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h5 className="overview__about__list__title">Màu sắc</h5>
            <p className="overview__about__item--null">
              Màu như hình, hoặc chọn màu theo yêu cầu
            </p>
          </>
        )}
      </div>
      <OverviewSpecifications
        height={height}
        width={width}
        weight={weight}
        length={length}
      />
    </div>
  );
};

export default OverviewAbout;
