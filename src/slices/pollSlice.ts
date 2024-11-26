
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Step {
  id: number;
  question: string;
  options: string[];
  selectedOption: string | null;
}

interface PollState {
  steps: Step[];
  currentStep: number;
  answers: { question: string; answer: string | null }[];
}

const initialState: PollState = {
  steps: [
    { id: 1, question: "How was your week overall?", options: ["👍", "🤔", "👎"], selectedOption: null },
    { id: 2, question: "How are you feeling today?", options: ["😀", "😐", "☹️"], selectedOption: null },
    { id: 3, question: "Would you recommend this app?", options: ["Yes", "Maybe", "No"], selectedOption: null },
  ],
  currentStep: 0,
  answers: [],
};

const pollSlice = createSlice({
  name: "poll",
  initialState,
  reducers: {
    selectOption(
      state,
      action: PayloadAction<{ stepId: number; option: string }>
    ) {
      const { stepId, option } = action.payload;
      const step = state.steps.find((s) => s.id === stepId);
      if (step) step.selectedOption = option;
    },
    goToNextStep(state) {
      if (state.currentStep <= state.steps.length - 1) state.currentStep++;
    },
    submitAnswers(state) {
      state.answers = state.steps.map((step) => ({
        question: step.question,
        answer: step.selectedOption,
      }));
    },
  },
});

export const { selectOption, goToNextStep, submitAnswers } = pollSlice.actions;
export default pollSlice.reducer;
