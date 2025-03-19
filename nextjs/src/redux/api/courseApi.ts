import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addCourse } from "../slices/courseSlice";

const COURSE_URL = "http://localhost:5005/api/v1/course";
export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: COURSE_URL, credentials: "include" }),
  endpoints: (builder) => ({
    getAllCourse: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(addCourse(result?.data?.course));
        } catch (error) {}
      },
    }),

    getCourseById: builder.query({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "GET",
      }),
    }),
    editCourse:builder.mutation({
      query:({formData,courseId})=>({
        url:`/${courseId}`,
        method:"PATCH",
        body:formData
      })
    })
  }),
  refetchOnFocus: false, // Add this
  refetchOnReconnect: false, // Add this
});

export const { useGetAllCourseQuery, useGetCourseByIdQuery,useEditCourseMutation } = courseApi;
