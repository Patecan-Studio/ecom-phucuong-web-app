import React from "react";
import ArrowRightIcon from "../../Icons/ArrowRightIcon";
import { CarouselButtonProps } from "../types";

const CarouselNextButton = ({ onClick }: CarouselButtonProps) => {
  return (
    <div className="carousel__next" onClick={onClick}>
      <ArrowRightIcon />
    </div>
  );
};

export default CarouselNextButton;
