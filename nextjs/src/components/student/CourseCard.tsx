"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Course } from "@/types/courseType";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const isPurchased = false;
  const user=useSelector((store:RootState)=>store.auth.user)

  return (
    <Card className="py-0 pb-2 mt-10 md:mt-0 w-full">
      <CardHeader className="px-0">
        <CardTitle>
          <Image
            src={course?.courseThumbnail}
            alt="image"
            height={500}
            width={800}
            className="rounded "
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{course?.courseName}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href={`/courses/${course?._id}`} >
          <Button className="text-2xl bg-orange-400 cursor-pointer">Explore</Button>
        </Link>
       {user?.role==="owner"&& <Link href={`/admin/courses/${course?._id}`} >
          <Button className="text-2xl bg-red-700 cursor-pointer ml-5">Edit</Button>
        </Link>}
      </CardFooter>
    </Card>
  );
};
export default CourseCard;
