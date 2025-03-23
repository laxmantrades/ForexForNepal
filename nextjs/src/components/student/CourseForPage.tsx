"use client"
import { useProtectedRoutesForNotAuthenticated } from "@/hooks/useProtectedRoute"
import Course from "./Course"

const CourseForpage=()=>{

    useProtectedRoutesForNotAuthenticated()
    return(
        <Course/>
    )
}
export default CourseForpage