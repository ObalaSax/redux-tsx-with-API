import { createSlice } from "@reduxjs/toolkit";

export interface ProductData {
  id: number;
  title: string;
  price: number;
}

const initialState: ProductData = {
  id: 0,
  title: "No Data",
  price: 0,
};

// This is my Reducers
export const productsSlices = createSlice({
  name: "prductsSlice",
  initialState,
  reducers: {
    priceAdd: (state) => {
      state.id += 1;
    },
  },
});

export const { priceAdd } = productsSlices.actions;
export default productsSlices.reducer;
