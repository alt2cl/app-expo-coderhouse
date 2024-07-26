import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authBaseUrl, authApiKey } from "@/database/userAuth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: authBaseUrl }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signUp?key=${authApiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
    signIn: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signInWithPassword?key=${authApiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
