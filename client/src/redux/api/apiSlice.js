import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_BACKEND_URL + "/api",
    prepareHeaders: (Headers, { getstate }) => {
      const token = getstate().auth.token;
      if (token) {
        Headers.set("authorization", `Bearer ${token}`);
      }
      return Headers;
    },
  }),
  endpoints: (builder) => ({}),
});
