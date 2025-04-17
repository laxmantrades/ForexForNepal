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
import { CourseType } from "@/types/courseType";
import VideoComponent from "./VideoComponent";
import Link from "next/link";
import SectionAndLecture from "./SectionsAndLecture";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

interface CourseProps {
  courseInfo: CourseType;
}

const CourseInfoUI: React.FC<CourseProps> = ({ courseInfo }) => {
  const {
    _id,
    courseDescription,
    courseName,
    coursePrice,
    courseTitle,

    lectureSection,
    IntroVideo,
  } = courseInfo;

  const coursePurhcased = useSelector(
    (store: RootState) => store.auth.user?.coursePurhcased
  );
  const { courseId } = useParams();

  const purchasedCourse = coursePurhcased?.some((courseId: string) => {
    return courseId == _id;
  });
  if (!courseInfo) return null;

  return (
    <div className="">
      <div className=" flex justify-center w-full ">
        <div className="w-full h-40  bg-cover bg-center bg-no-repeat bg-black " />
        <div className="absolute w-3/4 mt-5  text-white">
          {" "}
          <h1 className="text-2xl font-extrabold sm:text-4xl">{courseName}</h1>
          <h1>{courseTitle}</h1>
        </div>
      </div>

      <div className=" max-w-7xl  flex mx-4  lg:mx-auto lg:justify-between flex-col-reverse md:flex-row sm:max-w-5xl sm:space-x-14">
        <div className="mt-4 w-full lg:w-2/2">
          <SectionAndLecture lectureSection={lectureSection} />
        </div>

        <div className="md:-mt-14 mt-2  md:ml-5 w-full   ">
          <Card className=" overflow-scroll">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <VideoComponent videoUrl={IntroVideo} />
            </CardContent>
            <CardFooter className="flex-col p-0">
              <div className="flex justify-between  space-x-40 font-bold text-xl">
                <div className="flex">
                  <h1>Price:Nrs</h1>
                  {courseId === "67d1e09afce33698ada54ae7" ? (
                    <h1 className=" text-red-600 line-through"> 30000</h1>
                  ) : (
                    <h1>0</h1>
                  )}
                </div>
                {courseId === "67d1e09afce33698ada54ae7" ? (
                  <div>📴 80% OFF</div>
                ) : (
                  <div>100% OFF</div>
                )}
              </div>
              <div className="flex text-2xl mt-2 space-x-2.5 mb-5 ">
                <h1 className="">Get it now for</h1>{" "}
                <h1 className="font-extrabold text-red-500">Nrs{coursePrice} 🎁</h1>{" "}
              </div>
              {courseId==="67cdb7359d6376aa9395a8e0"&&<div className="flex space-x-3.5">
                <h1 className="mt-1"> Use CouponCode</h1>
                <h1 className="font-extrabold text-purple-700 text-2xl ">LAXMANTRADES</h1>
              </div>}
              <div className="w-full">
                {purchasedCourse ? (
                  <Link
                    href={`/courses/${courseInfo?._id}/lectures`}
                    className="w-full cursor-pointer"
                  >
                    <Button className="w-full cursor-pointer bg-blue-500">
                      Continue Course
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/courses/${courseId}/purchase`}>
                    <Button className="w-full cursor-pointer font-bold bg-blue-600">
                      Buy Course Now
                    </Button>
                  </Link>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mx-auto md:w-4xl  mt-10  px-4 rounded-2xl ">
        <h1 className="mt-2 ml-4 text-4xl  mx-auto text-center underline mb-5">
          Description
        </h1>
        <p
          className="text-xl "
          dangerouslySetInnerHTML={{
            __html: courseDescription || " lorem15 ",
          }}
        />
      </div>
    </div>
  );
};
export default CourseInfoUI;

