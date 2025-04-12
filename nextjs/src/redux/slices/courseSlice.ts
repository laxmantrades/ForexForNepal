
import { createSlice } from "@reduxjs/toolkit";

const courseSlice=createSlice({
    name:"courseSlice",
    initialState:{
        course:null as unknown
    },
    reducers:{
        addCourse:(state,action)=>{
            state.course=action.payload
        }
    }
})
export const {addCourse}=courseSlice.actions
export default courseSlice.reducer