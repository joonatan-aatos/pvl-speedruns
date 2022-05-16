import { Action } from "redux";

export const GET_CATEGORIES = "category:GET_CATEGORIES";
export const ADD_CATEGORY = "category:ADD_CATEGORY";

export interface GetCategoriesAction extends Action {
  type: typeof GET_CATEGORIES;
}

export interface AddCategoryAction extends Action {
  type: typeof ADD_CATEGORY;
  payload: {
    data: {
      name: string;
      description: string;
    };
    password?: string;
  };
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
