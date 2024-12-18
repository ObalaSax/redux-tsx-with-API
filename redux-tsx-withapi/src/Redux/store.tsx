import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./DataDistplaySlice";

export const myStore = configureStore({
  reducer: {
    niceSlice: myReducer,
  },
});

export type RootStore = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
