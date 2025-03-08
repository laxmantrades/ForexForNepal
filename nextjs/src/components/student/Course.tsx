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
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Course = () => {
  const isPurchased = false;
  useProtectedRoute("/login");
  const isAuthenticated = useSelector(
    (store: RootState) => store.auth.isAuthenticated
  );
  if (!isAuthenticated) return null;

  return (
    <div className=" flex  space-x-3 items-center justify-center  relative ">
      <div className="mt-30 ">
        <h1 className="text-4xl text-center underline font-bold mb-10"> All Courses </h1>
        <div className=" flex flex-wrap md:flex-nowrap md:space-x-11 items-center justify-center mx-2">
          {["1", "2"].map((title) => {
            return (
              <div className="mt-2 flex ">
                <CourseCard />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Course;
