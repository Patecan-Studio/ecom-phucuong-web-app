"use client";

import React from "react";
import "./style.scss";
import { OverviewProps } from "./types";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";
import OverviewInteract from "./OverviewInteract";
import OverviewQuantity from "./OverviewQuantity";

const Overview = ({ data }: OverviewProps) => {
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
        <OverviewInteract />
        <OverviewQuantity />
      </div>
    </div>
  );
};

export default Overview;
