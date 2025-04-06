import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const outLookApi = createApi({
  reducerPath: "outLookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5005/api/v1/outlook",
    credentials: "include",
  }),
  tagTypes: ["RefetchOutLook"],
  endpoints: (builder) => ({
    createOutlook: builder.mutation({
      query: (outlookData) => ({
        url: "/create-outlook",
        body: outlookData,
        method: "POST",
      }),
    }),
    getOutLook: builder.query({
      query: (TimeFrame) => ({
        url: `/find/${TimeFrame}`,
        method: "GET",
      }),
      providesTags: ["RefetchOutLook"],
    }),
    deleteOutLook: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error) => [{ type: "RefetchOutLook" }],
    }),
  }),
});
export const {
  useCreateOutlookMutation,
  useGetOutLookQuery,
  useDeleteOutLookMutation,
} = outLookApi;
