import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let URI = "";
if (typeof window !== "undefined") {
  URI =
    window.location.hostname === "forexfornepal.com"
      ? "https://api.forexfornepal.com/api/v1/coupon"
      : "http://localhost:5005/api/v1/coupon";
}

export const couponApi = createApi({
  reducerPath: "couponApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URI,
    credentials: "include",
  }),
  tagTypes: ["Refetch"],

  endpoints: (builder) => ({
    createCoupon: builder.mutation({
      query: ({ couponCode, subtype }) => ({
        url: "/",
        method: "POST",
        body: { couponCode, subtype },
      }),
      invalidatesTags: ["Refetch"],
    }),

    getCoponcode: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: [`Refetch`],
    }),
    deleteCouponCode: builder.mutation({
      query: (couponId) => ({
        url: `/${couponId}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useCreateCouponMutation,
  useGetCoponcodeQuery,
  useDeleteCouponCodeMutation,
} = couponApi;
