import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitPollData } from "../app/api";
import { submitAnswers } from "../slices/pollSlice";

export default function Summary() {
  const { steps } = useSelector((state) => state.poll);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const answers = steps.map((step) => ({
      question: step.question,
      answer: step.selectedOption,
    }));
    await submitPollData(answers);
    dispatch(submitAnswers());
    alert("Poll submitted successfully!");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-3/4 transform -translate-x-full animate-slide-in-left">
        <h1 className="text-2xl font-bold mb-4">Summary</h1>
        <ul className="mb-6">
          {steps.map((step, index) => (
            <li key={index} className="mb-4">
              <strong>{index + 1}. {step.question}</strong>
              <p className="ml-4">{step.selectedOption || "No answer selected"}</p>
            </li>
          ))}
        </ul>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
