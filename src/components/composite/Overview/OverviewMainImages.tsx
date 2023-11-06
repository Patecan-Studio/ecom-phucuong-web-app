import React, { forwardRef } from "react";
import type { ForwardedRef } from "react";
import { CustomImage } from "@/components/common";

const OverviewMainImagesInner = (
  { data, onOpenModal }: any,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div ref={ref} className="overview__image--main">
      <div className="overview__image__list">
        {data?.image_list.map((image: any) => (
          <div className="overview__image__item" key={image._id}>
            <CustomImage
              src={image.imageUrl}
              alt="Editor Desktop"
              fill
              onClick={onOpenModal}
              preload="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const OverviewMainImages = forwardRef(OverviewMainImagesInner);
export default OverviewMainImages;
