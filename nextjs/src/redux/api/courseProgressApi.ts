import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseProgressApi = createApi({
  reducerPath: "courseProgressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5005/api/v1/courseprogress",
    credentials: "include",
  }),
  tagTypes: ["Refetch"],
  endpoints: (builder) => ({
    createCourseProgress: builder.mutation({
      query: ({ courseId, userId, lectureId }) => ({
        url: `/create-courseprogress/${userId}/${courseId}/${lectureId}`,
        method: "POST",
      }),
      invalidatesTags: ["Refetch"],
    }),
    getCourseProgress: builder.query({
      query: ({ userId, courseId }) => ({
        url: `/${userId}/${courseId}`,
        method: "GET",
      }),
      providesTags:["Refetch"]
    }),
  }),
});
export const { useCreateCourseProgressMutation, useGetCourseProgressQuery } =
  courseProgressApi;
