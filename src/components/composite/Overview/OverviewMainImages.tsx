import React, { forwardRef } from "react";
import type { ForwardedRef } from "react";
import ExpandIcon from "@/components/common/Icons/ExpandIcon";
import Image from "next/image";

const OverviewMainImagesInner = (
  { data, onOpenModal }: any,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <>
      <div ref={ref} className="overview__image--main">
        <div className="overview__image__list">
          {data?.image_list.map((image: any) => (
            <div className="overview__image__item" key={image.imageName}>
              <Image
                src={image.imageUrl}
                quality={100}
                alt="Editor Desktop"
                fill
                onClick={onOpenModal}
                onMouseMove={(e: any) => {
                  const x = e.nativeEvent.offsetX;
                  const y = e.nativeEvent.offsetY;
                  const width = e.target.width;
                  const height = e.target.height;
                  const xPercent = (x / width) * 100;
                  const yPercent = (y / height) * 100;
                  e.target.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                  e.target.style.transform = "scale(2)";
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.transformOrigin = "center center";
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </div>
        <button className="overview__image__expand" onClick={onOpenModal}>
            <div className="overview__image__expand--inner">
              <ExpandIcon />
              <span>Nhấp để phóng to</span>
            </div>
          </button>
      </div>
    </>
  );
};

const OverviewMainImages = forwardRef(OverviewMainImagesInner);
export default OverviewMainImages;
