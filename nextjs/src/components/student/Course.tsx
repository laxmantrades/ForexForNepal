"use client";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import CourseCard from "./CourseCard";

const Course = () => {
  const { data, isError } = useGetAllCourseQuery(null);

  //const {courseName,courseThumbnail}=data

  return (
    <div className=" mt-20 ">
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18">
        {data?.course.map((course: any) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};
export default Course;
