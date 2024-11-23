import React from "react";
import { render } from "@testing-library/react";
import Carousel from "../Carousel";

describe("Carousel Component", () => {
  it("renders children properly", () => {
    const { getByText } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
    expect(getByText("Slide 1")).toBeInTheDocument();
    expect(getByText("Slide 2")).toBeInTheDocument();
  });

  it("applies the correct transition styles", () => {
    const { container } = render(
      <Carousel>
        <div>Slide 1</div>
      </Carousel>
    );
    const slider = container.firstChild.querySelector("div");
    expect(slider).toHaveClass("transition-transform");
  });
});
