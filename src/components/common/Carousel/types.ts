import { EmblaOptionsType } from "embla-carousel-react";
import { ReactNode } from "react";

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
  slides: Slide[];
}

export interface CarouselSlidesProps {
  slides: Slide[];
  isMainSlides: boolean;
}

export interface CarouselSlide {
  slide: Slide;
}

interface Slide extends MainSlide, SubSlide {}

interface MainSlide {
  id?: string;
  image?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  link?: string;
}

interface SubSlide {
  id?: string;
  title?: string;
  description?: string;
  icon?: React.JSX.Element;
}
