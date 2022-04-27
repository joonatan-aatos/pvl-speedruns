import { map, mergeMap, Observable } from "rxjs";
import { GetCategoriesAction, GET_CATEGORIES } from "./types";
import { ofType } from "redux-observable";
import api from "../../util/api";
import { setCategories } from ".";

const getCategoriesEpic = (
  action$: Observable<GetCategoriesAction>
): Observable<any> =>
  action$.pipe(
    ofType(GET_CATEGORIES),
    mergeMap(() =>
      api.get("categories").pipe(
        map((res) => {
          return setCategories(res);
        })
      )
    )
  );

export const categoryEpics = [getCategoriesEpic];
