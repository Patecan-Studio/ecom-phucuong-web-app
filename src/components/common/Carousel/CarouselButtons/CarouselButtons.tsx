import React from "react";
import CarouselPrevButton from "./CarouselPrevButton";
import CarouselNextButton from "./CarouselNextButton";
import { CarouselButtonsProps } from "../types";

const CarouselButtons = ({
  onPrevClick,
  onNextClick,
}: CarouselButtonsProps) => {
  return (
    <div className="carousel__buttons">
      <CarouselPrevButton onClick={onPrevClick} />
      <CarouselNextButton onClick={onNextClick} />
    </div>
  );
};

export default CarouselButtons;
