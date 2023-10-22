import React from "react";
import { OverviewImageProps } from "./types";
import useOverview from "@/hooks/useOverview";
import OverviewMainImages from "./OverviewMainImages";
import OverviewSubImages from "./OverviewSubImages";
import OverviewModal from "./OverviewModal";

const OverviewImage = ({ overviewData }: OverviewImageProps) => {
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
        data={overviewData}
        ref={mainCarouselRef}
        onOpenModal={handleOpenModal}
      />
      <OverviewSubImages
        data={overviewData}
        ref={subCarouselRef}
        onClick={handleSubCarouselClick}
        isActiveItem={isActiveItem}
      />
      {isOpenModal && (
        <OverviewModal
          data={overviewData}
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
