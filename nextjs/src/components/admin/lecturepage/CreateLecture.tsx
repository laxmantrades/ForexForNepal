"use client";

import { useEffect, useState } from "react";
import LectureForm from "./LectureForm";
import { useParams } from "next/navigation";
import { useCreateLectureMutation } from "@/redux/api/lectureApi";
import { toast } from "sonner";

import { useRouter } from "next/navigation";

const CreateLecture = () => {
  // !constants
  const [lectureInfo, setLectureInfo] = useState({
    lectureName: "",
    videoUrl: "",
  });
  console.log(lectureInfo);

  //!hooks

  const router = useRouter();

  const { sectionId } = useParams();

  const [createLecture, { data, isError, isSuccess, isLoading }] =
    useCreateLectureMutation();

  //!useEffect
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Successfully Created Lecture!");
      router.push(`/admin/section/${sectionId}`);
    }
    if (isError) {
      toast.error(data?.message || "Failed to create Lecture!");
    }
  }, [isSuccess, isError,data]);

  // !changeHandler

  const Onchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setLectureInfo({ ...lectureInfo, [name]: value });
  };

  //! submitHandler

  const submitHandler = () => {
    createLecture({ sectionId, lectureInfo });
  };

  return (
    <div>
      <h1>Create your lecture here</h1>
      <LectureForm
        lectureInfo={lectureInfo}
        onChange={Onchange}
        submitHandler={submitHandler}
        isLoading={isLoading}
      />
    </div>
  );
};
export default CreateLecture;
