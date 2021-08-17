/* eslint-disable no-undef */
import React from "react";
import { MdKeyboardArrowLeft, MdkeyboardArrowRight } from "react-icons/md";
import { StyledArrowContainer } from "./style";

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const nextCard = () => {
    setCurrentCard((prevIndex) => prevIndex + 1);
  };
  const prevCard = () => {
    setCurrentCard((prevIndex) => prevIndex - 1);
  };
  return (
    <styledCarouselContainer>
      {currentCard !== 0 && (
        <StyledArrowContainer onClick={prevCard}>
          <MdKeyboardArrowLeft />
        </StyledArrowContainer>
      )}
      {currentCard !== images.length - 1 && (
        <StyledArrowContainer onClick={nextCard}>
          <MdkeyboardArrowRight />
        </StyledArrowContainer>
      )}
    </styledCarouselContainer>
  );
};

export default Carousel;
