
"use client"
import useProtectedRoute from "@/hooks/useProtectedRoute";

const Course = () => {
  useProtectedRoute("/login");

  return <div></div>;
};
export default Course;
