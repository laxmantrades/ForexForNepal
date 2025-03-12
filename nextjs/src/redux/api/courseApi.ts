import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    }),
  }),
});

export const { useGetAllCourseQuery } = courseApi;
