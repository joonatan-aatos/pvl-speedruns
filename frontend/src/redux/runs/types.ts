import { Action } from "redux";

export const GET_RUNS = "run:GET_RUNS";

export interface GetRunsAction extends Action {
  type: typeof GET_RUNS;
}

export interface Run {
  runId: string;
  runnerName: string;
  videoLink: string;
  date: Date;
  time: number; // In milliseconds
  days: number;
}

export interface RunsState {
  runs: Array<Run>;
}
