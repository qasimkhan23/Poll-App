import React from "react";
import { useSelector } from "react-redux";
import Poll from "../components/Poll";
import Summary from "../components/Summary";
import { RootState } from "../app/store";

const Home: React.FC = () => {
  const { currentStep, steps } = useSelector((state: RootState) => state.poll);
  const isPollCompleted = currentStep > steps.length-1;

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      {!isPollCompleted ? <Poll /> : <Summary />}
    </div>
  );
};

export default Home;
