"use client";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import CourseCard from "./CourseCard";


const Course = () => {
  const { data, isError,isLoading } = useGetAllCourseQuery(null);
  
if(isLoading)return 
  

  return (
    <div className=" w-full ">
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18">
        {data?.course.map((course: any) => (
          <CourseCard course={course} key={course._id}/>
        ))}
      </div>
    </div>
  );
};
export default Course;
