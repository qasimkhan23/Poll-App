import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOption, goToNextStep } from "../slices/pollSlice";
import HoverLabel from "./HoverLabel";
import Carousel from "./Carousel";

export default function Poll() {
  const dispatch = useDispatch();
  const { steps, currentStep } = useSelector((state: any) => state.poll);

  const currentQuestion = steps[currentStep];

  const handleOptionClick = (option: string) => {
    dispatch(selectOption({ stepId: currentQuestion.id, option }));
    dispatch(goToNextStep());
  };

  return (
    <div className="h-screen flex bg-gray-100 relative w-full">
      <div className="absolute top-1/2 left-4 max-[600px]:top-1/3 transform -translate-y-1/2 flex flex-col gap-2 z-10">
        {steps.map((_: any, index: number) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 ${
              index === currentStep ? "bg-white border-white" : "bg-[#7B61FF] border-[#fff]"
            }`}
          ></div>
        ))}
      </div>

      <Carousel currentSlide={currentStep}>
        {steps.map((step: any, index: number) => (
          <div
            key={index}
            className={`h-full w-full flex transition-opacity duration-500 max-[600px]:flex-col ${
              index === currentStep ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full bg-[#7B61FF] max-[600px]:h-1/2 text-white flex items-center justify-center p-4">
              <h1 className="text-2xl md:text-3xl font-bold text-center">{step.question}</h1>
            </div>

            <div
              className="w-full max-[600px]:h-1/2  bg-white flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4"
            >
              {step.options.map((option: string, optionIndex: number) => (
                <HoverLabel
                  key={optionIndex}
                  icon={option}
                  label={`Option ${optionIndex + 1}`}
                  onClick={() => handleOptionClick(option)}
                />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

