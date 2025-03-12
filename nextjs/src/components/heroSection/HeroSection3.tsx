"use client"
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import CourseCard from "../student/CourseCard";

const HeroSection3 = () => {

  const {data,isError}=useGetAllCourseQuery(null)
  
  
  //const {courseName,courseThumbnail}=data
  

  return (
    <div className=" mt-10 ">
      <h1 className="text-6xl font-bold underline text-center">Our Courses</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18">
        {data?.course.map((course:any) => (
          <CourseCard course={course}/>
        ))}
      </div>
    </div>
  );
};
export default HeroSection3;
