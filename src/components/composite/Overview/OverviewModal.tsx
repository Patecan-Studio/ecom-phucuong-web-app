import React, { forwardRef, useEffect } from "react";
import type { ForwardedRef } from "react";
import { CustomImage } from "@/components/common";
import { OverviewModalProps } from "./types";
import CloseIcon from "@/components/common/Icons/CloseIcon";
import ArrowLeftIcon from "@/components/common/Icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/common/Icons/ArrowRightIcon";
import Image from "next/image";

const OverviewModalInner = (
  { data, onClose, onClickNext, onClickPrev }: any,
  ref: ForwardedRef<HTMLDivElement>
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).closest(".overview__image--modal-prev") ||
        (e.target as HTMLElement).closest(".overview__image--modal-next")
      ) {
        return;
      }

      if (!(e.target as HTMLElement).closest(".overview__image--modal")) {
        onClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="overview__image--modal-container">
      <div className="overview__image--modal-close">
        <CloseIcon onClick={onClose} />
      </div>
      <button className="overview__image--modal-prev" onClick={onClickPrev}>
        <ArrowLeftIcon />
      </button>
      <div ref={ref} className="overview__image--modal">
        <div className="overview__image__list">
          {data.image_list.map((image: any) => (
            <div className="overview__image__item" key={image._id}>
              <Image
                quality={100}
                src={image.imageUrl}
                alt="Editor Desktop"
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <button className="overview__image--modal-next" onClick={onClickNext}>
        <ArrowRightIcon />
      </button>
    </div>
  );
};

const OverviewModal = forwardRef(OverviewModalInner);
export default OverviewModal;
