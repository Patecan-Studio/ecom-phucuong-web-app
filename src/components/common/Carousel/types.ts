import { EmblaOptionsType } from "embla-carousel-react";

export interface CarouselButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export interface CarouselButtonProps {
  onClick: () => void;
}

export interface CarouselContentProps {
  className: string;
  option: EmblaOptionsType;
}