import React from "react";
import { OverviewProps } from "./types";
import useOverview from "@/hooks/useOverview";
import OverviewMainImages from "./OverviewMainImages";
import OverviewSubImages from "./OverviewSubImages";
import OverviewModal from "./OverviewModal";

const OverviewImage = ({ data }: OverviewProps) => {
  const {
    mainCarouselRef,
    subCarouselRef,
    modalCarouselRef,
    handleSubCarouselClick,
    isActiveItem,
    handleCloseModal,
    handleOpenModal,
    isOpenModal,
    handleModalClickPrev,
    handleModalClickNext,
  } = useOverview();

  return (
    <div className="overview__image">
      <OverviewMainImages
        data={data}
        ref={mainCarouselRef}
        onOpenModal={handleOpenModal}
      />
      <OverviewSubImages
        data={data}
        ref={subCarouselRef}
        onClick={handleSubCarouselClick}
        isActiveItem={isActiveItem}
      />
      {isOpenModal && (
        <OverviewModal
          data={data}
          ref={modalCarouselRef}
          onClose={handleCloseModal}
          onClickPrev={handleModalClickPrev}
          onClickNext={handleModalClickNext}
        />
      )}
    </div>
  );
};

export default OverviewImage;
