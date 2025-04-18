import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authenticationApi } from "./authenticationApi";

let URI = "";
if (typeof window !== "undefined") {
  URI =
    window.location.hostname === "forexfornepal.com"
      ? "https://api.forexfornepal.com/api/v1/coursepurchase"
      : "http://localhost:5005/api/v1/coursepurchase";
}

export const coursePurchaseApi = createApi({
  reducerPath: "coursePurchaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5005/api/v1/coursepurchase",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    coursePurchase: builder.mutation({
      query: ({ courseId, userId, couponCode }) => ({
        url: `/${courseId}`,
        method: "POST",
        body: { userId, couponCode },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // ✅ After purchase succeeds, refetch user
          dispatch(
            authenticationApi.util.invalidateTags(['User'])
          );
        } catch (err) {
          console.error('Purchase error:', err);
        }
      },
    }),
  }),
});
export const { useCoursePurchaseMutation } = coursePurchaseApi;
