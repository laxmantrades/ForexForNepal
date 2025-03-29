"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import { Course } from "@/types/courseType";
import VideoComponent from "./VideoComponent";
import Link from "next/link";
import SectionAndLecture from "./SectionsAndLecture";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";


interface CourseProps {
  courseInfo: Course;
}

const CourseInfoUI: React.FC<CourseProps> = ({ courseInfo }) => {
  if (!courseInfo) return null;
  const {
    _id,
    courseDescription,
    courseName,
    coursePrice,
    courseTitle,
    courseThumbnail,
    lectureSection,
    IntroVideo,
  } = courseInfo;
 
  
  const { courseId } = useParams();
  const coursePurhcased = useSelector(
    (store: RootState) => store.auth.user?.coursePurhcased
  );
  

  const purchasedCourse =
    
    coursePurhcased?.some((courseId: any) => {
      return courseId == _id;
    })
 


  return (
    <div className="">
      <div className=" flex justify-center w-full ">
        <Image
          src={"/ForexForNepal.png"}
          width={1400}
          height={100}
          alt="image"
          className="w-full h-40  bg-cover bg-center bg-no-repeat "
        />
        <div className="absolute w-3/4 mt-5 ">
          {" "}
          <h1 className="text-2xl sm:text-4xl font-bold">{courseName}</h1>
          <h1>{courseTitle}</h1>
        </div>
      </div>

      <div className=" max-w-7xl  flex mx-4  lg:mx-auto lg:justify-between flex-col-reverse md:flex-row sm:max-w-5xl sm:space-x-14">
        <div className="mt-4 w-full lg:w-2/2">
          <h1 className="mt-2 ml-4 text-3xl">Description</h1>
          <p
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html: courseDescription || " lorem15 ",
            }}
          />

          <SectionAndLecture lectureSection={lectureSection} />
        </div>

        <div className="md:-mt-14 mt-2  md:ml-5 w-full md:w-4/6 lg:w-xl ">
          <Card className=" overflow-scroll">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <VideoComponent videoUrl={IntroVideo} />
            </CardContent>
            <CardFooter className="flex-col p-0">
              <div className="flex justify-evenly space-x-1 font-bold text-xl">
                <h1>Price:Rs</h1>
                <h1 className=" text-red-600"> {coursePrice}</h1>
              </div>

              {purchasedCourse ? (
                <Link
                  href={`/courses/${courseInfo?._id}/lectures`}
                  className="w-full cursor-pointer"
                >
                  <Button className="w-full cursor-pointer">
                    Continue Course
                  </Button>
                </Link>
              ) : (
                <Link href={`/courses/${courseId}/purchase`}>
                  <Button className="w-full cursor-pointer">
                    Buy Course Now
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default CourseInfoUI;
