import React from "react";
import { OverviewColorsProps } from "./types";
import { upperCaseFirstLetter } from "@/share/utils/utils";

const OverviewColors = ({
  colors,
  dictionary,
  selectedMaterial,
  selectedColor,
  onColorSelect,
}: OverviewColorsProps) => {
  return (
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
            disabled={!dictionary[item.value]?.includes(selectedMaterial)}
          >
            {item.label !== "màu như hình" && (
              <div
                className="square-color"
                style={{
                  background: item.value.split(",")[0],
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                }}
              ></div>
            )}
            {upperCaseFirstLetter(item.label)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OverviewColors;
