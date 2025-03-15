import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CirclePlay } from "lucide-react";
import { Button } from "../ui/button";
import { Course } from "@/types/courseType";
import VideoComponent from "./VideoComponent";
import Link from "next/link";

// interface CourseProps {
//   courseInfo: Course;
// }

const CourseInfoUI = ({ courseInfo }) => {
  if (!courseInfo) return;
  const {
    courseDescription,
    courseName,
    coursePrice,
    courseTitle,
    courseThumbnail,
    lectureSection,
  } = courseInfo;
  const purchased = true;

  return (
    <div className="">
      <div className="mt-20 flex justify-center w-full ">
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

      <div className=" lg:w-5/6  flex mx-4  lg:mx-auto lg:justify-between flex-col-reverse md:flex-row sm:max-w-5xl sm:space-x-14">
        <div className="mt-4">
          <h1 className="mt-2 ml-4 text-3xl">Description</h1>
          <h1>{courseDescription}</h1>

          <Card className="mt-10 w-full md:w-96 lg:w-md">
            <CardHeader>
              <CardTitle>
                {" "}
                <h1 className="text-2xl font-bold ">Course Content 1</h1>
                <h1>{"5"} lectures</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {lectureSection.map((item: any) => (
                <div
                  key={item._id}
                  className="flex  md:space-x-2.5 md:space-y-2.5"
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1 ">
                      <AccordionTrigger className="text-xl  ">
                        <h1 className="">{item.sectionTitle}</h1>
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.lectures.map((lecture: any) => (
                          <div
                            key={lecture._id}
                            className="flex  space-x-3.5 space-y-2.5"
                          >
                            <CirclePlay /> <h1>{lecture.lectureName}</h1>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:-mt-20 mt-2  md:ml-5 w-full md:w-4/6 lg:w-xl ">
          <Card className="">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <VideoComponent />
            </CardContent>
            <CardFooter className="flex-col p-0">
              <div className="flex justify-evenly space-x-1 font-bold text-xl">
                <h1>Price:Rs</h1>
                <h1 className=" text-red-600"> {coursePrice}</h1>
              </div>

              {purchased ? (
                <Link href={`/courses/${courseInfo?._id}/lectures`} className="w-full cursor-pointer">
                  <Button className="w-full cursor-pointer">
                    Continue Course
                  </Button>
                </Link>
              ) : (
                <Button className="w-full cursor-pointer">
                  Buy Course Now
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default CourseInfoUI;
