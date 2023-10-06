import React from "react";
import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";
import { CarouselButtonProps } from "../types";

const CarouselPrevButton = ({ onClick }: CarouselButtonProps) => {
  return (
    <div className="carousel__prev" onClick={onClick}>
      <ArrowLeftIcon />
    </div>
  );
};

export default CarouselPrevButton;
