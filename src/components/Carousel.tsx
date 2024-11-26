import React from "react";

interface CarouselProps {
  children: React.ReactNode;
  currentSlide: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, currentSlide }) => {
  return (
    <div className="overflow-hidden relative w-full h-full">
      <div
        className="h-full w-full transition-transform duration-500 transform"
        style={{ transform: `translateY(-${100 * currentSlide}%)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
