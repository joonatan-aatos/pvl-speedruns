import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RunsState } from "./types";

const initialState: RunsState = {
  runs: [],
};

export const runs = createSlice({
  name: "runs",
  initialState,
  reducers: {
    setRuns: (state, action: PayloadAction<Array<any>>) => {
      state.runs = action.payload;
    },
    addRun: (state, action: PayloadAction<any>) => {
      state.runs = [...state.runs, action.payload];
    },
  },
});

export const { setRuns, addRun } = runs.actions;

export default runs.reducer;
