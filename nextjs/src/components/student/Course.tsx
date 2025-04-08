"use client";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import CourseCard from "./CourseCard";
import CourseCardSkeleton from "../skeletons/CourseSkeleton";

const Course = () => {
  const { data, isError, isLoading } = useGetAllCourseQuery(null);

  if (isLoading)
    return (
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18">
        {["hello", "world"].map((index) => (
          <CourseCardSkeleton key={index} />
        ))}
      </div>
    );

  return (
    <div className=" w-full ">
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18">
        {data?.course.map((course: any) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>
    </div>
  );
};
export default Course;
