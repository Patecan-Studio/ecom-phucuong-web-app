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
  const isShowHeight = true;
  const isShowWidth = true;
  const isShowLength = true;
  const isShowWeight = true;

  return (
    <div className="overview__specifications">
      <h5 className="overview__specifications__title">Kích thước</h5>
      {isShowHeight && <p>cao {height}</p>}
      {isShowWidth && <p>rộng {width}</p>}
      {isShowLength && <p>dài {length}</p>}
      {isShowWeight && <p>nặng {weight}</p>}
    </div>
  );
};

export default OverviewSpecifications;
