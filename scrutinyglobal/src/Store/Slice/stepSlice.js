import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = stepSlice.actions;
export const selectCurrentStep = (state) => state.step.currentStep;
export default stepSlice.reducer;
