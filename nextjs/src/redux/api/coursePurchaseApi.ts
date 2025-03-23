import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coursePurchaseApi=createApi({
    reducerPath:"coursePurchaseApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5005/api/v1/coursepurchase",credentials:"include"}),
    endpoints:(builder)=>({
        coursePurchase:builder.mutation({
            query:({courseId,userId,couponCode})=>({
                url:`/${courseId}`,
            method:"POST",
            body:{userId,couponCode}
            })
           
        })
    })
})
export const {useCoursePurchaseMutation}=coursePurchaseApi