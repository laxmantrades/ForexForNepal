"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import CourseCard from "../student/CourseCard";
import { Course } from "@/types/courseType";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import { Button } from "../ui/button";
import Link from "next/link";

const AllCoursePage = () => {
  const store = useSelector((store: RootState) => store?.course.course);
  console.log("Redux store:", store); // Check what it logs

  const { data, isError } = useGetAllCourseQuery(null, {
    skip: store !== null,
  });

  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="text-4xl  font-extrabold underline ">Our Courses</h1>
        <Link href={"courses/create-course"}><Button className="text-xl  font-extrabold p-4 cursor-pointer flex">
          <Plus className="rounded-full bg-white text-black"/>Create Course
        </Button>
        </Link>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18  max-w-5xl">
        {store?.map((course: Course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};
export default AllCoursePage;
