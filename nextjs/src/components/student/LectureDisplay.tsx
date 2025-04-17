"use client";

import { useGetAllSectionWithLecturesQuery } from "@/redux/api/section&LectureApi";
import { Separator } from "../ui/separator";
import LectureDescription from "./LectureDescription";
import LectureSection from "./LectureSection";
import VideoComponent from "./VideoComponent";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Section } from "@/types/sectionType";
import { Skeleton } from "../ui/skeleton";

const LectureDisplay = () => {
  //data fetching
  const { courseId } = useParams();
  const { data, isLoading } = useGetAllSectionWithLecturesQuery(courseId);
  //useProtectedRoutesForLecture()

  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  useEffect(() => {
    setVideoUrl(data?.section[0]?.lectures[0]?.videoUrl);
    setVideoTitle(data?.section[0]?.lectures[0]?.lectureName);
  }, [data]);
  const OnVideoClick = (url: string, lectureName: string) => {
    setVideoUrl(url);
    setVideoTitle(lectureName);
  };

  if (isLoading) return <LoadingComponnet/>

  return (
    <div className="md:flex flex-row mt-5 w-full ">
      <div className=" md:w-full mx-2  md:flex-8/12">
        <Card className="p-0">
          <CardContent className="p-0">
            <VideoComponent videoUrl={videoUrl} />
          </CardContent>
        </Card>
        <LectureDescription videoTitle={videoTitle} />
      </div>

      <div className="w-full  text-left flex flex-4/12">
        <Separator
          orientation="vertical"
          className="bg-black font-extrabold "
        />
        <div className="text-center w-full">
          <h1 className="text-2xl text-green-600 font-extrabold"> FRACTALS </h1>
          <Separator
            orientation="horizontal"
            className="bg-black font-extrabold w-full "
          />
          {data?.section?.map((section: Section) => (
            <LectureSection
              key={section._id}
              section={section}
              OnVideoClick={OnVideoClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LectureDisplay;

const LoadingComponnet=()=>{
  return (
    <div className="md:flex flex-row mt-5 w-full">
    {/* Left Side */}
    <div className="md:w-full mx-2 md:flex-8/12">
      <Skeleton className="w-full h-[300px] rounded-lg" />{" "}
      {/* Video Placeholder */}
      <div className="mt-4">
        <Skeleton className="w-2/3 h-8 mb-2" /> {/* Title Placeholder */}
        <Skeleton className="w-full h-20" /> {/* Description Placeholder */}
      </div>
    </div>

    {/* Right Side */}
    <div className="w-full text-left flex flex-4/12 mt-5 md:mt-0">
      <Separator
        orientation="vertical"
        className="bg-black font-extrabold"
      />
      <div className="text-center w-full px-4">
        <Skeleton className="w-1/2 h-8 mx-auto mb-4" />{" "}
        {/* FRACTALS Title */}
        <Separator
          orientation="horizontal"
          className="bg-black font-extrabold w-full mb-4"
        />
        {/* List of Skeletons for Sections */}
        <div className="space-y-4">
          {[...Array(5)].map((_, idx) => (
            <Skeleton key={idx} className="w-full h-10" />
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
