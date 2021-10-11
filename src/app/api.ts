import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IOffer, ICategories } from "../types";

type ProductsResponse = IProduct[];
type OffersResponse = IOffer[];
type CategoriesResponse = ICategories[];

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "./data" }),
  endpoints: (builder) => ({
    products: builder.query<ProductsResponse, void>({
      query: () => "products.json",
    }),
    offers: builder.query<OffersResponse, void>({
      query: () => "offers.json",
    }),
    categories: builder.query<CategoriesResponse, void>({
      query: () => "categories.json",
    }),
  }),
});

export const { useProductsQuery, useOffersQuery, useCategoriesQuery } = api;
