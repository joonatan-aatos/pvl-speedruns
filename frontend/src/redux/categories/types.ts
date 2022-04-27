import { Action } from "redux";

export const GET_CATEGORIES = "category:GET_CATEGORIES";

export interface GetCategoriesAction extends Action {
  type: typeof GET_CATEGORIES;
}

export interface Category {
  categoryId: string;
  name: string;
  description: string;
  runs: Array<any>;
}

export interface CategoriesState {
  categories: Array<Category>;
}
