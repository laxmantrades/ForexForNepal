import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sectionAndLectureApi = createApi({
  reducerPath: "sectionAndLectureApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5005/api/v1/section",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    GetAllSectionWithLectures: builder.query({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSectionWithLecturesQuery } = sectionAndLectureApi;
