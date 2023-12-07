import React, { forwardRef } from "react";
import type { ForwardedRef } from "react";
import { CustomImage } from "@/components/common";
import { OverviewSubImagesProps } from "./types";

const OverviewSubImagesInner = (
  { data, isActiveItem, onClick }: any,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className="overview__image--sub" ref={ref}>
      <div className="overview__image__list">
        {data?.image_list.map((image: any, index: number) => (
          <div
            className={`overview__image__item ${isActiveItem(index)}`}
            key={image.imageName}
          >
            <CustomImage
              src={image.imageUrl}
              alt="Editor Desktop"
              fill
              onClick={() => onClick(index)}
              preload="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const OverviewSubImages = forwardRef(OverviewSubImagesInner);
export default OverviewSubImages;
