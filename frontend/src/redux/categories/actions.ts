import { GetCategoriesAction, GET_CATEGORIES } from "./types";

export const getCategories = (): GetCategoriesAction => ({
  type: GET_CATEGORIES,
});
