import React from "react";

export default function Carousel({ children, currentSlide }) {
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
}
