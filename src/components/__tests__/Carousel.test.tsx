import React from "react";
import { render } from "@testing-library/react";
import Carousel from "../Carousel"; 

describe("Carousel Component", () => {
  it("renders children properly", () => {
    const { getByText } = render(
      <Carousel currentSlide={0}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
    expect(getByText("Slide 1")).toBeInTheDocument();
    expect(getByText("Slide 2")).toBeInTheDocument();
  });

  it("applies the correct styles", () => {
    const { container } = render(
      <Carousel currentSlide={0}>
        <div>Slide 1</div>
      </Carousel>
    );
    const slider = container.firstChild as HTMLElement; 
    expect(slider).toHaveClass("overflow-hidden relative w-full h-full");
  });
});


