"use client";


import CourseInfoUI from "./CourseInfoUI";
import FAQ from "./FAQ";
import { useGetCourseByIdQuery } from "@/redux/api/courseApi";
import { useParams } from "next/navigation";

const CourseInfoPage = () => {
  //data fetching logics
  const { courseId } = useParams();
  
  const { data, error } = useGetCourseByIdQuery(courseId);
  const faq=[{
    faqTitle:"For what is course for?",
    faqDescription:"This is not for beginners"
  }]
 

  return (
    <>
      <CourseInfoUI  courseInfo={data?.course} />
      <FAQ faq={faq} />
    </>
  );
};
export default CourseInfoPage;
