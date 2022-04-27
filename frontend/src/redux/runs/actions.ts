import { GetRunsAction, GET_RUNS } from "./types";

export const getRuns = (): GetRunsAction => ({
  type: GET_RUNS,
});
