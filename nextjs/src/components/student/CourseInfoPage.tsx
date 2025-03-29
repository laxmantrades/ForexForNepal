"use client";


import CourseInfoUI from "./CourseInfoUI";
import FAQ from "./FAQ";
import { useGetCourseByIdQuery } from "@/redux/api/courseApi";
import { useParams } from "next/navigation";

const CourseInfoPage = () => {
  //data fetching logics
  const { courseId } = useParams();
  
  const { data, error,isLoading } = useGetCourseByIdQuery(courseId);

  
  if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error loading course.</p>;
if (!data?.course) return <p>No course found.</p>
 

  return (
    <>
      <CourseInfoUI  courseInfo={data?.course} />
      <FAQ faq={data?.course?.FAQ} />
    </>
  );
};
export default CourseInfoPage;
