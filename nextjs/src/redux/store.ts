import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { courseApi } from "./api/courseApi";
import { sectionAndLectureApi } from "./api/section&LectureApi";
import courseSlice from "./slices/courseSlice";
import { lectureApi } from "./api/lectureApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    course:courseSlice,
    [courseApi.reducerPath]: courseApi.reducer,
    [sectionAndLectureApi.reducerPath]: sectionAndLectureApi.reducer,
    [lectureApi.reducerPath]:lectureApi.reducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      courseApi.middleware,
      sectionAndLectureApi.middleware,
      lectureApi.middleware
    ),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
