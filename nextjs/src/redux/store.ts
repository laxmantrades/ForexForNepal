import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { courseApi } from "./api/courseApi";
import { sectionAndLectureApi } from "./api/section&LectureApi";
import courseSlice from "./slices/courseSlice";
import { lectureApi } from "./api/lectureApi";
import { coursePurchaseApi } from "./api/coursePurchaseApi";
import { couponApi } from "./api/couponApi";
import { courseProgressApi } from "./api/courseProgressApi";
import { authenticationApi } from "./api/authenticationApi";
import { outLookApi } from "./api/outlookApi";


const store = configureStore({
  reducer: {
    auth: authSlice,
    course: courseSlice,
    [courseApi.reducerPath]: courseApi.reducer,
    [sectionAndLectureApi.reducerPath]: sectionAndLectureApi.reducer,
    [lectureApi.reducerPath]: lectureApi.reducer,
    [coursePurchaseApi.reducerPath]: coursePurchaseApi.reducer,
    [couponApi.reducerPath]:couponApi.reducer,
    [courseProgressApi.reducerPath]:courseProgressApi.reducer,
    [authenticationApi.reducerPath]:authenticationApi.reducer,
    [outLookApi.reducerPath]:outLookApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      courseApi.middleware,
      sectionAndLectureApi.middleware,
      lectureApi.middleware,
      coursePurchaseApi.middleware,
      couponApi.middleware,
      courseProgressApi.middleware,
      authenticationApi.middleware,
      outLookApi.middleware
    ),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
