
"use client"
import useProtectedRoute from "@/hooks/useProtectedRoute";

const Course = () => {
  useProtectedRoute("/login");

  return <div>This is a course page Lorem500</div>;
};
export default Course;
