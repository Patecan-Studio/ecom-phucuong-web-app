import React, { forwardRef } from "react";
import type { ForwardedRef } from "react";
import { CustomImage } from "@/components/common";
import { OverviewSubImagesProps } from "./types";

const OverviewMainImagesInner = (
  { data, isActiveItem, onClick }: any,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className="overview__image--sub" ref={ref}>
      <div className="overview__image__list">
        {data?.image_list.map((image: any, index: number) => (
          <div
            className={`overview__image__item ${isActiveItem(index)}`}
            key={image._id}
          >
            <CustomImage
              src={image.imageUrl}
              alt="Editor Desktop"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              onClick={() => onClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const OverviewMainImages = forwardRef(OverviewMainImagesInner);
export default OverviewMainImages;
