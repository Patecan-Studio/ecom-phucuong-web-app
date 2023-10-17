"use client";

import React from "react";
import "./style.scss";
import { OverviewProps } from "./types";
import OverviewImage from "./OverviewImage";

const Overview = ({ data }: OverviewProps) => {

  return <div className="overview">
    <div className="overview__left">
      <OverviewImage src={data.image.imageUrl} />
    </div>
    <div className="overview__right">RIGHT</div>
  </div>;
};

export default Overview;
