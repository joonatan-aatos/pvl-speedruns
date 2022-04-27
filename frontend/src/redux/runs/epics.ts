import { map, mergeMap, Observable } from "rxjs";
import { ofType } from "redux-observable";
import api from "../../util/api";
import { GetRunsAction, GET_RUNS } from "./types";
import { setRuns } from ".";

const getRunsEpic = (action$: Observable<GetRunsAction>): Observable<any> =>
  action$.pipe(
    ofType(GET_RUNS),
    mergeMap(() =>
      api.get("runs").pipe(
        map((res) => {
          return setRuns(res);
        })
      )
    )
  );

export const runEpics = [getRunsEpic];
