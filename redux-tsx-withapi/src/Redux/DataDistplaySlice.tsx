import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MyNumber {
  nambari: number;
}

const initialState: MyNumber = {
  nambari: 0,
};

export const mySlice = createSlice({
  name: "niceSlice",
  initialState,
  reducers: {
    addition: (state) => {
      state.nambari += 1;
    },
    additionPro: (state, action: PayloadAction<number>) => {
      state.nambari += action.payload;
    },
    minus: (state) => {
      state.nambari -= 1;
    },
    minusPro: (state, action: PayloadAction<number>) => {
      state.nambari -= action.payload;
    },
  },
});

export const { addition, additionPro, minus, minusPro } = mySlice.actions;
export default mySlice.reducer;
