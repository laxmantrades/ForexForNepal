import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedin } from "../slices/authSlice";

let URI=""
if(typeof window !=="undefined"){
  URI =
  window.location.hostname === "forexfornepal.com"
    ? "https://forexfornepal.com/authcheck"
    : "http://localhost:5005/authcheck";
}
 
export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URI,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => ({
        url: "/",
        method: "get",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(userLoggedin(result?.data?.user));
        } catch (error) {}
      },
    }),
  }),
});

export const { useFetchUserQuery } = authenticationApi;
