import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

const sectionAndLectureApi=createApi({
    reducerPath:"sectionAndLectureApi",
    baseQuery:fetchBaseQuery({baseUrl:"",credentials:"include"}),
   endpoints:(builder)=>({
    getAllSection:builder.query({
        query:(courseId)=>({
            url:"",
            method:"get"
        })
    })
   })