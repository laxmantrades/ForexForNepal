"use client";

import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import Image from "next/image";
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

interface props {
  constants: {
    imagePreview: string | null;
    courseDescription: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    courseInput: {
      courseName: string;

      coursePrice: string;
      courseThumbnail: string;
      courseTitle: string;
      IntroVideo: string;
    };
  };
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const CourseFormPage: React.FC<props> = ({ constants, onChangeHandler }) => {
  const { imagePreview, courseDescription, setValue, courseInput } = constants;

  return (
    <div>
      {/**Course Name */}
      <h1>CourseName</h1>
      <Input
        value={courseInput.courseName}
        placeholder="Your Course Name"
        name="courseName"
        onChange={onChangeHandler}
      />
      {/**Course Title */}
      <h1 className="mt-4">CourseTitle</h1>
      <Input
        value={courseInput.courseTitle}
        placeholder="Your Course Name"
        name="courseTitle"
        onChange={onChangeHandler}
      />
      {/**Course Description */}

      <h1 className="mt-4">CourseDescription</h1>
      <ReactQuill
        theme="snow"
        value={courseDescription}
        onChange={setValue}
        className=""
      />

      {/**Course Price */}

      <h1 className="mt-4">CoursePrice</h1>
      <Input
        value={courseInput.coursePrice}
        placeholder="Your Course Name"
        name="coursePrice"
        onChange={onChangeHandler}
      />

      {/**Course Thumbnail */}
      <h1 className="mt-4">CourseThumbnail</h1>
      <Input
        type="file"
        placeholder="Your Course Name"
        name="courseThumbnail"
        onChange={onChangeHandler}
      />
      <Image
        src={imagePreview ? imagePreview : courseInput?.courseThumbnail}
        alt="png"
        height={50}
        width={100}
      />

      {/**Course Thumbnail */}
      <h1 className="mt-4">IntroVideo</h1>
      <Input
        value={courseInput.IntroVideo}
        placeholder="Your Course Name"
        name="IntroVideo"
        onChange={onChangeHandler}
      />
    </div>
  );
};
export default CourseFormPage;
