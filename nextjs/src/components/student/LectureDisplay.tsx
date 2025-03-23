"use client";

import { useGetAllSectionWithLecturesQuery } from "@/redux/api/section&LectureApi";
import { Separator } from "../ui/separator";
import LectureDescription from "./LectureDescription";
import LectureSection from "./LectureSection";
import VideoComponent from "./VideoComponent";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useProtectedRoutesForNotAuthenticated } from "@/hooks/useProtectedRoute";

const LectureDisplay = () => {
  //data fetching
  const { courseId } = useParams();
  const { data } = useGetAllSectionWithLecturesQuery(courseId);
  useProtectedRoutesForNotAuthenticated()

  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    setVideoUrl(data?.section[0]?.lectures[0]?.videoUrl);
  }, [data]);
  const OnVideoClick = (url: string) => {
    setVideoUrl(url);
  };

  return (
    <div className="md:flex flex-row mt-5 w-full ">
      <div className="w-[90%] md:w-full mx-2  flex-8/12">
        <Card className="p-0">
          <CardContent className="p-0">
            <VideoComponent videoUrl={videoUrl} />
          </CardContent>
        </Card>
        <LectureDescription />
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
          {data?.section?.map((section: any) => (
            <LectureSection
              key={section._id}
              section={section}
              OnVideoClick={OnVideoClick}
              setVideoUrl={setVideoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LectureDisplay;
