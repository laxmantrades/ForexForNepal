"use client"
import { CircleCheckBig, CirclePlay } from "lucide-react";
import { AccordionContent } from "../ui/accordion";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { useGetCourseProgressQuery } from "@/redux/api/courseProgressApi";
import { useParams } from "next/navigation";

const LectureSectionWithComplete = ({ OnVideoClick, lecture }) => {
  const isComplete = false;
  const {courseId}=useParams()
  console.log(lecture?._id);
  
  //const {data}=useGetCourseProgressQuery({courseId,})
  
  
  return (
    <AccordionContent
      onClick={() => {
        OnVideoClick(lecture.videoUrl);
      }}
      className="h-20 bg-gray-100 cursor-pointer"
      key={lecture._id}
    >
      <Separator orientation="horizontal" className="bg-gray-300  w-full  " />

      <div className="flex space-x-2 items-center ml-2 mt-5 justify-between">
        <div className="flex">
          <CirclePlay />
          <h1>{lecture?.lectureName}</h1>
        </div>

        {!isComplete ? (
          <Checkbox className="mr-10 border-black  h-5 w-5" />
        ) : (
          <CircleCheckBig color="#27e70d" className="mr-10" />
        )}
      </div>
    </AccordionContent>
  );
};
export default LectureSectionWithComplete;
