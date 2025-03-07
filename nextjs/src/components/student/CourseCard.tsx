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

const CourseCard=()=>{
    const isPurchased=false
    return(
        <Card className="mx-4  ">
              <CardHeader>
                <CardTitle className="">
                  <h1 className="text-3xl mt-4 font-bold text-center">
                    🚀 Master Trading with ICT+ SMC (Fractals)
                  </h1>
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex w-full justify-center ">
                  <Image
                    src={"/course.png"}
                    alt="trading"
                    height={500}
                    width={520}
                    className="  rounded-xl  "
                  />
                </div>
                <div className="text-xl mt-2 text-center">
                  <h1 className="text-2xl font-bold ">
                    Master ICT & SMC with Fractals from Zero to Hero
                  </h1>
                </div>

                <div className="mt-5 flex items-center justify-end ">
                  {isPurchased ? (
                    <Button className="bg-orange-500 text-3xl h-15 ">
                      Continue To Course
                    </Button>
                  ) : (
                    <Button className="bg-orange-500 text-3xl h-15 ">
                      Enroll Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
    )
}
export default CourseCard