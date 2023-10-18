import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const useOverview = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainCarouselRef, mainCarouselMethods] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });
  const [subCarouselRef, subCarouselMethods] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
    containScroll: "trimSnaps",
  });

  mainCarouselMethods?.on("select", () => {
    subCarouselMethods?.scrollTo(mainCarouselMethods.selectedScrollSnap());
    setSelectedIndex(mainCarouselMethods.selectedScrollSnap());
  });

  const handleSubCarouselClick = (index: number) => {
    mainCarouselMethods?.scrollTo(index);
    setSelectedIndex(index);
  };

  const isActiveItem = (index: number) => {
    return index === selectedIndex ? "overview__image__item--active" : "";
  };

  return {
    mainCarouselRef,
    subCarouselRef,
    handleSubCarouselClick,
    isActiveItem,
  };
};

export default useOverview;
