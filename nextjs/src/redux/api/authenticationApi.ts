import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedin } from "../slices/authSlice";


const URI = process.env.NODE_ENV === "production"?"https://api.forexfornepal.com/authcheck":"http://localhost:5005/authcheck";

 
export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URI,
    credentials: "include",
  }),
  tagTypes:["User"],
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => ({
        url: "/",
        method: "get",
      }),
      providesTags:["User"],
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
