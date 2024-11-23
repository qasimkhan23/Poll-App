import { configureStore } from "@reduxjs/toolkit";
import pollReducer from "../slices/pollSlice";

const store = configureStore({
  reducer: {
    poll: pollReducer,
  },
});

export default store;
