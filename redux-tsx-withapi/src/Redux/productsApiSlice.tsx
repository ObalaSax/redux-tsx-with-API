import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductData } from "./DataDistplaySlice";

interface FetchProductData {
  produts: ProductData[];
}

// This is calling the API
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductData[], void>({
      query: () => "products",
    }),
  }),
});

//export const {}=productsApi
export type { FetchProductData };
