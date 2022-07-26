import {
  AddCategoryAction,
  ADD_CATEGORY,
  GetCategoriesAction,
  GET_CATEGORIES,
} from "./types";

export const getCategories = (): GetCategoriesAction => ({
  type: GET_CATEGORIES,
});

export const addCategory = (
  data: {
    name: string;
    description: string;
  },
  password: string
): AddCategoryAction => ({
  type: ADD_CATEGORY,
  payload: {
    data,
    password,
  },
});
