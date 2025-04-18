import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let URI = process.env.NODE_ENV === "production"
      ? "https://api.forexfornepal.com/api/v1/lecture"
      : "http://localhost:5005/api/v1/lecture";


export const lectureApi = createApi({
  reducerPath: "sectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URI,
    credentials: "include",
  }),
  tagTypes:["RefetchLecture"],
  endpoints: (builder) => ({
    getLecture: builder.query({
      query: (lectureId) => ({
        url: `/${lectureId}`,
        method: "GET",
      }),
      providesTags:["RefetchLecture"]
    }),
    
    updateLecture: builder.mutation({
      query: ({ lectureId, lectureInfo }) => ({
        url: `/${lectureId}`,
        method: "PATCH",
        body: lectureInfo,
      }),
      invalidatesTags:["RefetchLecture"]
    }),
    createLecture: builder.mutation({
      query: ({ sectionId, lectureInfo }) => ({
        url: `/${sectionId}/create-lecture`,
        method: "POST",
        body: lectureInfo,
      }),
      invalidatesTags:["RefetchLecture"]
    }),
    deleteLecture: builder.query({
      query: ({ sectionId, lectureId }) => ({
        url: `/${sectionId}/${lectureId}`,
        method: "DELETE",
      }),
      
    }),
  }),
});
export const {
  useGetLectureQuery,
  useUpdateLectureMutation,
  useCreateLectureMutation,
  useLazyDeleteLectureQuery,
} = lectureApi;
