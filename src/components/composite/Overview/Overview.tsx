"use client";

import React from "react";
import "./style.scss";
import { OverviewProps } from "./types";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";

const Overview = ({ data }: OverviewProps) => {
  console.log(data);
  return (
    <div className="overview">
      <div className="overview__left">
        <OverviewImage data={data} />
      </div>
      <div className="overview__right">
        <OverviewInfo
          name={data.product_name}
          price={data.product_price}
          discountPrice={data.product_discountPrice}
          discountPercentage={data.product_discountPercentage}
          productCode={data.product_code}
          brand={data.product_brand?.brand_name}
        />
      </div>
    </div>
  );
};

export default Overview;
