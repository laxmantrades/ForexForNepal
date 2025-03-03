import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../redux/reducers/authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
