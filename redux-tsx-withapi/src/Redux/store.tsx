import { configureStore } from "@reduxjs/toolkit";
import ProductData from "./DataDistplaySlice";
export const myStore = configureStore({
  reducer: {
    products: ProductData,
  },
});

export type RootState = typeof myStore.getState;
