"use client"; // need to delete this

import React from "react";
import "./style.scss";
import { OverviewProps } from "./types";
import OverviewImage from "./OverviewImage";
import OverviewInfo from "./OverviewInfo";
import OverviewQuantity from "./OverviewQuantity";
import OverviewButtons from "./OverviewButtons";
import OverviewPolicy from "./OverviewPolicy";
import OverviewAbout from "./OverviewAbout";

// TODO: leave to any for now
const Overview = ({ data }: any) => {
  console.log("data", data);

  const [overviewData, setOverviewData] = React.useState(
    JSON.parse(JSON.stringify(data.product_variants[0]))
  );

  const materials = data.product_variants
    .map((item: any) => item.material)
    .filter(
      (value: any, index: any, self: any) => self.indexOf(value) === index
    );

  const colors = data.product_variants
    .map((item: any) => item.color)
    .filter(
      (item: any, index: number, self: any) =>
        index ===
        self.findIndex(
          (sub_item: any) =>
            sub_item.label === item.label && sub_item.value === item.value
        )
    );

  console.log("overviewData", overviewData);

  return (
    <div className="overview">
      <div className="overview__left">
        <OverviewImage overviewData={overviewData} />
        <OverviewPolicy className="on-mobile" />
      </div>
      <div className="overview__right">
        <OverviewInfo
          name={data.product_name}
          price={overviewData.price}
          discountPrice={overviewData.discount_price}
          discountPercentage={overviewData.discount_percentage}
          productCode={overviewData.sku}
          brand={data.product_brand?.brand_name}
        />
        <div className="overview__order">
          <div className="overview__order__left">
            <OverviewAbout materials={materials} colors={colors}/>
            <OverviewQuantity quantity={5} />
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
