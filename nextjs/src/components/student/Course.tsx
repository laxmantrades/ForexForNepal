"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import Image from "next/image";
import useProtectedRoute from "@/hooks/useProtectedRoute";
import CourseCard from "./CourseCard";

const Course = () => {
  const isPurchased = false;
  useProtectedRoute("/login");

  return (
    <div className="flex  space-x-3 items-center justify-center  relative ">
      <div className="mt-30 flex flex-wrap">
        {["1", "2"].map((title) => {
          return (
            <div className="mt-2 md:w-1/2">
            <CourseCard/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Course;
