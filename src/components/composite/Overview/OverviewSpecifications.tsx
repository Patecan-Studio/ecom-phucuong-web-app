import React from "react";

const OverviewSpecifications = ({
  height,
  width,
  weight,
  length,
}: {
  height: string;
  width: string;
  weight: string;
  length: string;
}) => {
  return (
    <div className="overview__specifications">
      {height.match(/\d+/) && parseFloat(height) !== 0 && (
        <div className="overview__about__list">
          <h5 className="overview__about__list__title">Chiều cao</h5>
          <div className="overview__about__items">
            <p className="overview__about__item no-border">{height}</p>
          </div>
        </div>
      )}
      {width.match(/\d+/) && parseFloat(width) !== 0 && (
        <div className="overview__about__list">
          <h5 className="overview__about__list__title">Chiều rộng</h5>
          <div className="overview__about__items">
            <p className="overview__about__item no-border">{width}</p>
          </div>
        </div>
      )}
      {length.match(/\d+/) && parseFloat(length) !== 0 && (
        <div className="overview__about__list">
          <h5 className="overview__about__list__title">Chiều dài</h5>
          <div className="overview__about__items">
            <p className="overview__about__item no-border">{length}</p>
          </div>
        </div>
      )}
      {weight.match(/\d+/) && parseFloat(weight) !== 0 && (
        <div className="overview__about__list">
          <h5 className="overview__about__list__title">Trọng lượng</h5>
          <div className="overview__about__items">
            <p className="overview__about__item no-border">{weight}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewSpecifications;
