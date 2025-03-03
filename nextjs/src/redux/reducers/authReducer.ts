import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

const authReducer = createSlice({
  name: "authSlice",
  initialState: {
    user: null as User | null,

    isAuthenticated: false,
    loading: true,
  },
  reducers: {
    userLoggedin: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    userLoggedOut: (state) => {
      (state.user = null), (state.isAuthenticated = false);
    },
    changeLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const { userLoggedin, userLoggedOut, changeLoading } =
  authReducer.actions;
export default authReducer.reducer;
