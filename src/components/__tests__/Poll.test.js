import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Poll from "../Poll";

const mockStore = configureStore([]);

describe("Poll Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      poll: {
        steps: [
          { id: 1, question: "How are you?", options: ["😀", "😐", "☹️"] },
        ],
        currentStep: 0,
      },
    });
    store.dispatch = jest.fn();
  });

  it("renders the question and options", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Poll />
      </Provider>
    );
    expect(getByText("How are you?")).toBeInTheDocument();
    expect(getByText("😀")).toBeInTheDocument();
    expect(getByText("😐")).toBeInTheDocument();
    expect(getByText("☹️")).toBeInTheDocument();
  });
});
