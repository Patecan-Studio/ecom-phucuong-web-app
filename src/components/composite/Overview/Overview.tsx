"use client";

import React from "react";
import "./style.scss";
import { OverviewProps } from "./types";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";
import OverviewQuantity from "./OverviewQuantity";
import OverviewButtons from "./OverviewButtons";
import OverviewPolicy from "./OverviewPolicy";
import OverviewAbout from "./OverviewAbout";

const Overview = ({ data }: OverviewProps) => {
  return (
    <div className="overview">
      <div className="overview__left">
        <OverviewImage data={data} />
        <OverviewPolicy className="on-mobile" />
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
        <div className="overview__order">
          <div className="overview__order__left">
            <OverviewAbout />
            <OverviewQuantity />
            <OverviewButtons />
          </div>
          <div className="overview__order__right">
            <OverviewPolicy className="on-desktop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
