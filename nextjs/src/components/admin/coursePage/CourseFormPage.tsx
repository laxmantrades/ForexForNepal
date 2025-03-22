"use client"

import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), {
    ssr: false,
  });

const CourseFormPage = ({constants,onChangeHandler}) => {

    const{imagePreview,setImagePreview,courseDescription,setValue,courseInput}=constants
    
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
          <img
            src={imagePreview ? imagePreview : courseInput?.courseThumbnail}
           alt="png"
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
