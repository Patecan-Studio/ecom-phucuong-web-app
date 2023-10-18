import React from "react";
import { OverviewProps } from "./types";
import useOverview from "@/hooks/useOverview";
import OverviewMainImages from "./OverviewMainImages";
import OverviewSubImages from "./OverviewSubImages";

const OverviewImage = ({ data }: OverviewProps) => {
  const {
    mainCarouselRef,
    subCarouselRef,
    handleSubCarouselClick,
    isActiveItem,
  } = useOverview();

  return (
    <div className="overview__image">
      <OverviewMainImages data={data} ref={mainCarouselRef} />
      <OverviewSubImages
        data={data}
        ref={subCarouselRef}
        onClick={handleSubCarouselClick}
        isActiveItem={isActiveItem}
      />
    </div>
  );
};

export default OverviewImage;
