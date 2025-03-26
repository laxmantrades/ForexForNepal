import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseProgressApi=createApi({
    reducerPath:"courseProgressApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5005/api/v1/courseprogress",credentials:"include"}),
    endpoints:(builder)=>({
        createCourseProgress:builder.mutation({
            query:({courseId,userId,lectureId})=>({
                url:`/create-courseprogress/${userId}/${courseId}/${lectureId}`,
                method:"POST",
            
            })
        }),
        getCourseProgress:builder.query({
            query:({userId,courseId})=>({
                    url:`/${userId}/${courseId}`,
                    method:"GET"
            })
        })
    })
})
export const {useCreateCourseProgressMutation,useGetCourseProgressQuery}=courseProgressApi