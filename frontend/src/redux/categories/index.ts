import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState } from "./types";

const initialState: CategoriesState = {
  categories: [],
};

export const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Array<any>>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<any>) => {
      state.categories = [...state.categories, action.payload];
    },
  },
});

export const { setCategories, addCategory } = categories.actions;

export default categories.reducer;
