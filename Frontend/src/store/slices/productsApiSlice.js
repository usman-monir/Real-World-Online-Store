import { PRODUCTS_URL } from "../../../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getProductDetails: builder.query({
            query: (product_id) => ({
                url: `${PRODUCTS_URL}/${product_id}`
            }),
            keepUnusedDataFor: 5
        })
    })
})

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;
