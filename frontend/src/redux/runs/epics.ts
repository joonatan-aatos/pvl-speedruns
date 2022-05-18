import { map, mergeMap, Observable } from "rxjs";
import { ofType } from "redux-observable";
import api from "../../util/api";
import { AddRunAction, ADD_RUN, GetRunsAction, GET_RUNS } from "./types";
import { addRun, setRuns } from ".";

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

const addRunEpic = (action$: Observable<AddRunAction>): Observable<any> =>
  action$.pipe(
    ofType(ADD_RUN),
    mergeMap((payload) =>
      api.post("runs", payload.payload).pipe(
        map((res) => {
          return addRun(res);
        })
      )
    )
  );

export const runEpics = [getRunsEpic, addRunEpic];
