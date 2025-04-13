"use client";
import { CircleCheckBig, CirclePlay } from "lucide-react";
import { AccordionContent } from "../ui/accordion";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import {
  useCreateCourseProgressMutation,
  useGetCourseProgressQuery,
} from "@/redux/api/courseProgressApi";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { toast } from "sonner";
import { lectureType } from "@/types/lectureType";

interface props {
  OnVideoClick:(videoUrl:string,lectureName:string)=>void,
  lecture:lectureType

}

const LectureSectionWithComplete:React.FC<props> = ({ OnVideoClick, lecture }) => {
  const { courseId } = useParams();
  const userId = useSelector((store: RootState) => store?.auth?.user?._id);

  //!hooks
  const { data } = useGetCourseProgressQuery({ courseId, userId });
  const [
    createCourseProgress,
    {  isError, isSuccess },
  ] = useCreateCourseProgressMutation();
  const lectureId = lecture._id;
  //!checking if the lectureis in the courseProgress or not
  const isCompleted = data?.findLectureProgress?.lectureProgressLectures.some(
    (progress: string) => progress == lecture._id
  );

  //! handleclick
  const handleComplete = () => {
    if (confirm("Congratulations for completing course!")) {
      createCourseProgress({ courseId, lectureId, userId });
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Marked lecture as complete!");
    }
    if (isError) {
      toast.error("Failed to mark lecture complete!");
    }
  }, [isError, isSuccess]);

  return (
    <AccordionContent
      onClick={() => {
        OnVideoClick(lecture?.videoUrl, lecture?.lectureName);
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

        {!isCompleted ? (
          <Checkbox
            className="mr-10 border-black  h-5 w-5"
            onClick={handleComplete}
          />
        ) : (
          <CircleCheckBig color="#27e70d" className="mr-10" />
        )}
      </div>
    </AccordionContent>
  );
};
export default LectureSectionWithComplete;
