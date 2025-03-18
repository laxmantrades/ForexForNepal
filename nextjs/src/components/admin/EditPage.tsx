"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import dynamic from "next/dynamic";
import { ChangeEventHandler, useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useGetCourseByIdQuery } from "@/redux/api/courseApi";

const EditPage = () => {
  const { editcourse } = useParams();

  const { data } = useGetCourseByIdQuery(editcourse);
  console.log(data);

  const [courseInput, setCourseInput] = useState({
    courseName: data?.course?.courseName || "",
    courseDescription: "",
    coursePrice: "",
    courseThumbnail: "",
    courseTitle: "",
    IntroVideo: "",
  });
  const [value, setValue] = useState("");

  const onChange: ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = e.target;
    setCourseInput({ ...courseInput, [name]: value });
  };
  useEffect(() => {
    if (data) {
      setCourseInput({
        courseName: data.course?.courseName || "",
        courseDescription: data.course?.courseDescription || "",
        coursePrice: data.course?.coursePrice || "",
        courseThumbnail: data.course?.courseThumbnail || "",
        courseTitle: data.course?.courseTitle || "",
        IntroVideo: data.course?.IntroVideo || "",
      });
    }
  }, [data]);

  return (
    <div className="p-5">
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl font-bold">Edit Your Course</h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <h1>CourseName</h1>
          <Input
            value={courseInput.courseName}
            placeholder="Your Course Name"
          />
           <h1 className="mt-4">CourseDescription</h1>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className=""
          />
          <h1 className="mt-4">CourseDescription</h1>
          <Input
            value={courseInput.courseDescription}
            placeholder="Your Course Name"
          />
          <h1 className="mt-4">CoursePrice</h1>
          <Input
            value={courseInput.coursePrice}
            placeholder="Your Course Name"
          />
          <h1 className="mt-4">CourseThumbnail</h1>
          <Input
            value={courseInput.courseThumbnail}
            placeholder="Your Course Name"
          />
          
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="px-10 text-xl">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default EditPage;
