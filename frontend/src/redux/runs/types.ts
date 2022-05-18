import { Action } from "redux";
import { Category } from "../categories/types";

export const GET_RUNS = "run:GET_RUNS";
export const ADD_RUN = "run:ADD_RUN";

export interface GetRunsAction extends Action {
  type: typeof GET_RUNS;
}

export interface AddRunAction extends Action {
  type: typeof ADD_RUN;
  payload: {
    data: {
      runnerName: string;
      proof: string;
      date: string;
      time: number;
      days: number;
      categoryId: string;
    };
    password: string;
  };
}

export interface Run {
  runId: string;
  runnerName: string;
  category: Category;
  categoryId: string;
  proof: string;
  date: Date;
  time: number; // In milliseconds
  days: number;
}

export interface RunsState {
  runs: Array<Run>;
}
