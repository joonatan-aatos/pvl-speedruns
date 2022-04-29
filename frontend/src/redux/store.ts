import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import categories from "./categories";
import { categoryEpics } from "./categories/epics";
import runs from "./runs";
import { runEpics } from "./runs/epics";

const reducer = combineReducers({
  categories,
  runs,
});

export type RootState = ReturnType<typeof reducer>;

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
    }),
    epicMiddleware,
  ],
});

export const rootEpic = combineEpics<any>(...categoryEpics, ...runEpics);

epicMiddleware.run(rootEpic);

export default store;
