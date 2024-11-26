import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitPollData } from "../app/api";
import { submitAnswers } from "../slices/pollSlice";
import Loader from "./Loader";
const Summary: React.FC = () => {
  const { steps } = useSelector((state: any) => state.poll);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const answers = steps.map((step: any) => ({
        question: step.question,
        answer: step.selectedOption,
      }));
      await submitPollData(answers);
      dispatch(submitAnswers());
      alert("Poll submitted successfully!");
    } catch (error) {
      alert("Failed to submit poll. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Summary</h1>
      <ul className="mb-6">
        {steps.map((step: any, index: number) => (
          <li key={index} className="mb-2">
            <strong>{step.question}:</strong>{" "}
            {step.selectedOption || "No answer"}
          </li>
        ))}
      </ul>
      {isLoading ? (
        <Loader />
      ) : (
        <button
          onClick={handleSubmit}
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600`}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Summary;
