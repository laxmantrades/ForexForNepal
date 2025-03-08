import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import CourseCard from "../student/CourseCard";

const HeroSection3 = () => {
  return (
    <div className=" mt-10 ">
      <h1 className="text-6xl font-bold underline text-center">Our Courses</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18">
        {[1, 2].map(() => (
          <CourseCard/>
        ))}
      </div>
    </div>
  );
};
export default HeroSection3;
