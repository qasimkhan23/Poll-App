import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOption, goToNextStep } from "../slices/pollSlice";
import HoverLabel from "./HoverLabel";
import Carousel from "./Carousel";

export default function Poll() {
  const dispatch = useDispatch();
  const { steps, currentStep } = useSelector((state) => state.poll);

  const currentQuestion = steps[currentStep];

  const handleOptionClick = (option) => {
    console.log('currentStep',currentStep)

    dispatch(selectOption({ stepId: currentQuestion.id, option }));
    dispatch(goToNextStep());
  };

  return (
    <div className="h-screen flex bg-gray-100 relative w-full">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-2 z-10">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-white ${
              index === currentStep ? "bg-[#fff]" : "bg-[#7B61FF]"
            }`}
          ></div>
        ))}
      </div>

      <Carousel currentSlide={currentStep}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`h-full w-full flex transition-opacity duration-500 ${
              index === currentStep ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-1/2 bg-[#7B61FF] text-white flex items-center justify-center">
              <h1 className="text-3xl font-bold">{step.question}</h1>
            </div>

            <div className="w-1/2 bg-white flex flex-col items-center justify-center gap-8">
              {step.options.map((option, optionIndex) => (
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
