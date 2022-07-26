import { AddRunAction, ADD_RUN, GetRunsAction, GET_RUNS } from "./types";

export const getRuns = (): GetRunsAction => ({
  type: GET_RUNS,
});

export const addRun = (
  data: {
    runnerName: string;
    proof: string;
    date: string;
    time: number;
    days: number;
    categoryId: string;
  },
  password: string
): AddRunAction => ({
  type: ADD_RUN,
  payload: {
    data,
    password,
  },
});
