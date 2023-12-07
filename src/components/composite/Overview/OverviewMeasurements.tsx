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
    <div className="overview__about__list">
      <h5 className="overview__about__list__title">Kích thước</h5>
      <div className="overview__about__items--specifications">
        {measurements.map((item: any, index: number) => {
          const [size, weight] = item.split("|");
          const [height, width, length] = size.split("x");
          const sizeUnit = "(" + length.split("(")[1];
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
            >
              <button
                className={classname}
                key={item + index}
                disabled={disabled}
              >
                {"Cao " + height + sizeUnit}
              </button>
              <button
                className={classname}
                key={item + index}
                disabled={disabled}
              >
                {"Rộng " + width + sizeUnit}
              </button>
              <button
                className={classname}
                key={item + index}
                disabled={
                  !dictionary[item]?.includes(selectedMaterial) ||
                  !dictionary[item]?.includes(selectedColor)
                }
              >
                {"Dài " + length.split("(")[0] + sizeUnit}
              </button>
              <button
                className={classname}
                key={item + index}
                disabled={disabled}
              >
                {"Nặng " + weight}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewMeasurements;
