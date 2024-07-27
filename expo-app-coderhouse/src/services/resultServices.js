import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/database/realTimeDtaBase";

export const resultApi = createApi({
  reducerPath: "resultApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["profileImageGet"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getResultsByCategory: builder.query({
      query: (category) =>
        `results.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (res) => {
        const transformedResponse = Object.values(res);
        return transformedResponse;
      },
    }),
    getResultById: builder.query({
      query: (localId) => `results/${localId}.json`,
      transformResponse: (res) => {
        if (res) {
          const transformedResponse = Object.values(res);
          return transformedResponse;
        } else {
          return [];
        }
      },
    }),

    postResult: builder.mutation({
      query: ({ result, localId }) => ({
        url: `results/${localId}.json`,
        method: "POST",
        body: {
          result,
        },
      }),
    }),

    getProfileimage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ["profileImageGet"],
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
      invalidatesTags: ["profileImageGet"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetResultsByCategoryQuery,
  useGetResultByIdQuery,
  usePostResultMutation,
  useGetProfileimageQuery,
  usePostProfileImageMutation,
} = resultApi;
