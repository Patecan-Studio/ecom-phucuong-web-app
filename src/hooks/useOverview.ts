import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const useOverview = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
  const [modalCarouselRef, modalCarouselMethods] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    startIndex: selectedIndex,
  });

  mainCarouselMethods?.on("select", () => {
    subCarouselMethods?.scrollTo(mainCarouselMethods.selectedScrollSnap());
    modalCarouselMethods?.scrollTo(mainCarouselMethods.selectedScrollSnap());
    setSelectedIndex(mainCarouselMethods.selectedScrollSnap());
  });

  const handleSubCarouselClick = (index: number) => {
    mainCarouselMethods?.scrollTo(index);
    modalCarouselMethods?.scrollTo(index);
    setSelectedIndex(index);
  };

  const isActiveItem = (index: number) => {
    return index === selectedIndex ? "overview__image__item--active" : "";
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return {
    mainCarouselRef,
    subCarouselRef,
    modalCarouselRef,
    handleSubCarouselClick,
    isActiveItem,
    handleOpenModal,
    handleCloseModal,
    isOpenModal,
  };
};

export default useOverview;
