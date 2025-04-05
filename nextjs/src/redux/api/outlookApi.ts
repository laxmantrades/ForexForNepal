import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const outLookApi=createApi({
    reducerPath:"outLookApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5005/api/v1/",credentials:"include"}),
    endpoints:(builder)=>({
        createOutlook:builder.mutation({
            query:(outlookData)=>({
                url:"/create-outlook",
                body:outlookData
            })
        })
    })
})
export const{useCreateOutlookMutation}=outLookApi