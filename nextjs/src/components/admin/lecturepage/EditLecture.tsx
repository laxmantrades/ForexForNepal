"use client";
import { useEffect, useState } from "react";
import LectureForm from "./LectureForm";
import {
  useGetLectureQuery,
  useUpdateLectureMutation,
} from "@/redux/api/lectureApi";
import { useParams } from "next/navigation";
import { toast } from "sonner";

const EditLecture = () => {
  // !constants
  const [lectureInfo, setLectureInfo] = useState({
    lectureName: "",
    videoUrl: "",
  });

  // !api calls && hooks
  const { lectureId } = useParams();
  const { data } = useGetLectureQuery(lectureId);
  const [updateLecture, { data: lectureData, isError, isSuccess,isLoading }] =
    useUpdateLectureMutation();

  useEffect(() => {
    if (data) {
      setLectureInfo({
        lectureName: data?.lecture?.lectureName,
        videoUrl: data?.lecture?.videoUrl,
      });
    }
    if (isSuccess) {
      toast.success(lectureData?.message || "Successfully Updated Lecture!");
    }
    if (isError) {
      toast.error(lectureData?.message || "Failed to update Lecture!");
    }
  }, [data,isSuccess,isError]);

  // !changeHandler

  const Onchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setLectureInfo({ ...lectureInfo, [name]: value });
  };
  //!submit Handler
  const submitHandler = () => {
    updateLecture({ lectureId, lectureInfo });
  };

  return (
    <div className="mt-2 p-4">
      <h1 className="text-2xl font-bold">Update Lecture</h1>
      <LectureForm lectureInfo={lectureInfo} onChange={Onchange} submitHandler={submitHandler} isLoading={isLoading}/>
    </div>
  );
};
export default EditLecture;
