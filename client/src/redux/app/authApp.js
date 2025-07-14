import { apiSlice } from "../api/apiSlice";

const AUTH_URL = "/auth";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: userData,
        Credentials: "include",
      }),
    }),
     login: builder.mutation({
    query: (userData) => ({
      url: `${AUTH_URL}/login`,
      method: "POST",
      body: userData,
      Credentials: "include",
    }),
  }),
  }),
 
});

export const { useSignupMutation, useLoginMutation } = authApiSlice;
