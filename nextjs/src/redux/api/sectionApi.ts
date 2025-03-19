import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sectionApi=createApi({
    reducerPath:"sectionApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/api/v1/section"}),
    endpoints:(builder)=>({
        getSection:builder.query({
            query:(courseId)=>({
                url:`/${courseId}`,
                method:"GET"
            })
        })
    })
})
//export const {useGetSectionQuery}=sectionApi