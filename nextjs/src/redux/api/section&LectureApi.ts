import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let URI = "";
if (typeof window !== "undefined") {
  URI =
    window.location.hostname === "forexfornepal.com"
      ? "https://api.forexfornepal.com/api/v1/section"
      : "http://localhost:5005/api/v1/section";
}

export const sectionAndLectureApi = createApi({
  reducerPath: "sectionAndLectureApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URI,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    GetAllSectionWithLectures: builder.query({
      query: (courseId) => ({
        url: `/course/${courseId}`,
        method: "GET",
      }),
    }),

    updateSection: builder.mutation({
      query: ({ sectionId, sectionTitle }) => ({
        url: `/${sectionId}`,
        method: "PATCH",
        body: { sectionTitle },
      }),
    }),
    createSection: builder.mutation({
      query: ({ courseId, sectionTitle }) => ({
        url: `/${courseId}/create-section`,
        method: "POST",
        body: { sectionTitle },
      }),
    }),
    getSectionById: builder.query({
      query: (sectionId) => ({
        url: `/${sectionId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllSectionWithLecturesQuery,
  useUpdateSectionMutation,
  useCreateSectionMutation,
  useGetSectionByIdQuery,
} = sectionAndLectureApi;
