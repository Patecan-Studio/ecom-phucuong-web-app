import React from "react";

const OverviewSpecifications = ({ sizes }: { sizes: string[] }) => {
  // const isShowHeight = height.match(/\d+/) && parseFloat(height) !== 0;
  // const isShowWidth = width.match(/\d+/) && parseFloat(width) !== 0;
  // const isShowLength = length.match(/\d+/) && parseFloat(length) !== 0;
  // const isShowWeight = weight.match(/\d+/) && parseFloat(weight) !== 0;

  return (
    <div className="overview__specifications">
      {/* <h5 className="overview__specifications__title">Kích thước</h5>
      {isShowHeight && <p>cao {height}</p>}
      {isShowWidth && <p>rộng {width}</p>}
      {isShowLength && <p>dài {length}</p>}
      {isShowWeight && <p>nặng {weight}</p>} */}
    </div>
  );
};

export default OverviewSpecifications;
