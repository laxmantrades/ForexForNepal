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

const CourseCard = () => {
  const isPurchased = false;
  return (
    <Card className="py-0 pb-2 mt-10 md:mt-0">
      <CardHeader className="px-0">
        <CardTitle>
          <Image
            src={"/course.png"}
            alt="image"
            height={500}
            width={500}
            className="rounded "
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">Master Fractals with ICT(1:3RR)</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href="/courses/courseId">
          <Button className="text-2xl bg-orange-400">Explore</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default CourseCard;
