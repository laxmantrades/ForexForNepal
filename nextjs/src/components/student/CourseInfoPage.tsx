"use client";

import Image from "next/image";
import CourseInfoUI from "./CourseInfoUI";
import FAQ from "./FAQ";
import { useGetCourseByIdQuery } from "@/redux/api/courseApi";
import { useParams } from "next/navigation";

const CourseInfoPage = () => {
  //data fetching logics
  const { courseId } = useParams();
  const { data, error } = useGetCourseByIdQuery(courseId);
 
 

  return (
    <>
      <CourseInfoUI  courseInfo={data?.course} />
      <FAQ />
    </>
  );
};
export default CourseInfoPage;
