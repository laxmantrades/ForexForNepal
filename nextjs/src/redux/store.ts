import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { courseApi } from "./api/courseApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
