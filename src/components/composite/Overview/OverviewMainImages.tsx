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
        {data.image_list.map((image: any) => (
          <CustomImage
            key={image._id}
            src={image.imageUrl}
            alt="Editor Desktop"
            className="overview__image__item"
            width={0}
            height={0}
            sizes="100vw"
            onClick={onOpenModal}
          />
        ))}
      </div>
    </div>
  );
};

const OverviewMainImages = forwardRef(OverviewMainImagesInner);
export default OverviewMainImages;
