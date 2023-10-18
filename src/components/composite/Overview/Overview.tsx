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
          price={data.price}
          discountPrice={data.discountPrice}
          discountPercentage={data.discountPercentage}
          productCode={data.sku}
          brand={data.product_brand.brand_name}
        />
      </div>
    </div>
  );
};

export default Overview;
