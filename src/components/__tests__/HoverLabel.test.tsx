import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HoverLabel from "../HoverLabel";

describe("HoverLabel Component", () => {
  it("renders the icon and label", () => {
    const { getByText } = render(
      <HoverLabel icon="😀" label="Happy Face" />
    );
    expect(getByText("😀")).toBeInTheDocument();
    expect(getByText("Happy Face")).toBeInTheDocument();
  });

  it("triggers onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <HoverLabel icon="😀" label="Happy Face" onClick={handleClick} />
    );
    fireEvent.click(getByText("😀"));
    expect(handleClick).toHaveBeenCalled();
  });
});
