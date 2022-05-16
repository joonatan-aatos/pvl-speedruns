import { map, mergeMap, Observable } from "rxjs";
import {
  AddCategoryAction,
  ADD_CATEGORY,
  GetCategoriesAction,
  GET_CATEGORIES,
} from "./types";
import { ofType } from "redux-observable";
import api from "../../util/api";
import { addCategory, setCategories } from ".";

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

const addCategoryEpic = (
  action$: Observable<AddCategoryAction>
): Observable<any> =>
  action$.pipe(
    ofType(ADD_CATEGORY),
    mergeMap((payload) =>
      api.post("categories", payload.payload).pipe(
        map((res) => {
          return addCategory(res);
        })
      )
    )
  );

export const categoryEpics = [getCategoriesEpic, addCategoryEpic];
