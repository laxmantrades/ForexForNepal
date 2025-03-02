import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
   
    isAuthenticated: false,
   
    
  },
  reducers: {
    userLoggedin:(state,action)=>{
        state.user=action.payload
        state.isAuthenticated=true
        
        
    },userLoggedOut:(state)=>{
        state.user=null,
        state.isAuthenticated=false
        
    }
  },
});
export const {userLoggedin,userLoggedOut}=authReducer.actions
export default authReducer.reducer
