import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addCourse } from "../slices/courseSlice";

const URI =
    process.env.NODE_ENV === "production"
      ? "https://api.forexfornepal.com/api/v1/course"
      : "http://localhost:5005/api/v1/course";

 

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: URI, credentials: "include" }),
  endpoints: (builder) => ({
    getAllCourse: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        dispatch(addCourse(result?.data?.course));
      },
    }),

    getCourseById: builder.query({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "GET",
      }),
    }),
    editCourse: builder.mutation({
      query: ({ formData, courseId }) => ({
        url: `/${courseId}`,
        method: "PATCH",
        body: formData,
      }),
    }),
    createCourse: builder.mutation({
      query: (formData) => ({
        url: `/create-course`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
  refetchOnFocus: false, // Add this
  refetchOnReconnect: false, // Add this
});

export const {
  useGetAllCourseQuery,
  useGetCourseByIdQuery,
  useEditCourseMutation,
  useCreateCourseMutation,
} = courseApi;
