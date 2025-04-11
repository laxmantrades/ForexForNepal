import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedin } from "../slices/authSlice";

export const authenticationApi=createApi({
reducerPath:"authenticationApi",
baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5005/authcheck",credentials:"include"}),
endpoints:(builder)=>({
    fetchUser:builder.query({
        query:()=>({
            url:"/",
            method:"get"
        }),
        async onQueryStarted(_, { queryFulfilled, dispatch }) {
            try {
              const result = await queryFulfilled;
              
              
              dispatch(userLoggedin(result?.data?.user));
            } catch (error) {}
          },
    })
})
})

export const {useFetchUserQuery}=authenticationApi
