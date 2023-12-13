import React from "react";
import { OverviewMeasurementsProps } from "./types";

const OverviewMeasurements = ({
  measurements,
  dictionary,
  selectedMaterial,
  selectedColor,
  selectedMeasurement,
  onMeasurementSelect,
}: OverviewMeasurementsProps) => {
  return (
    measurements[0] !== "0x0x0(cm)|0(kg)" && (
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Kích thước</h5>
        <div className="overview__about__items--specifications">
          {measurements.map((item: any, index: number) => {
            const [size, weight] = item.split("|");
            const [width, length, height] = size.split("x");
            const sizeUnit = "(" + height.split("(")[1];
            const disabled =
              !dictionary[item]?.includes(selectedMaterial) ||
              !dictionary[item]?.includes(selectedColor);
            const classname = `overview__about__item ${
              selectedMeasurement === item &&
              dictionary[item]?.includes(selectedMaterial) &&
              "active"
            }`;

            return (
              <div
                className="overview__about__items--specification"
                onClick={() => onMeasurementSelect(item)}
                key={item + index}
              >
                {height.split("(")[0] !== "0" && (
                  <button className={classname} disabled={disabled}>
                    {"Cao " + height}
                  </button>
                )}
                {width !== "0" && (
                  <button className={classname} disabled={disabled}>
                    {"Rộng " + width + sizeUnit}
                  </button>
                )}
                {length !== "0" && (
                  <button
                    className={classname}
                    disabled={
                      !dictionary[item]?.includes(selectedMaterial) ||
                      !dictionary[item]?.includes(selectedColor)
                    }
                  >
                    {"Dài " + length + sizeUnit}
                  </button>
                )}
                {weight.split("(")[0] !== "0" && (
                  <button className={classname} disabled={disabled}>
                    {"Nặng " + weight}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default OverviewMeasurements;
