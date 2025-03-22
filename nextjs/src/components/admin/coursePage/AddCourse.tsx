"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import CourseFormPage from "./CourseFormPage";
import "react-quill-new/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useCreateCourseMutation } from "@/redux/api/courseApi";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AddCourse = () => {
  //!constants
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [courseDescription, setValue] = useState("");
  const [courseInput, setCourseInput] = useState({
    courseName: "",

    coursePrice: "",
    courseThumbnail: "",
    courseTitle: "",
    IntroVideo: "",
  });

  //!hooks
const[createCourse,{data,isError,isLoading,isSuccess}]=useCreateCourseMutation()
const router=useRouter()

useEffect(()=>{
if(isSuccess){
    toast.success(data?.message|| "Successfully created course!")
    router.push("/courses")
}
if(isError){
    toast.error(data?.message|| "Failed to create course!")
}
},[])
  //!changeHandler
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name, files, type } = e.target;
    setCourseInput({
      ...courseInput,
      [name]: type === "file" ? files?.[0] : value,
    });
    if (files) {
      const fileReader = new FileReader();
      fileReader.onloadend = () =>
        setImagePreview(fileReader?.result as string);
      fileReader.readAsDataURL(files?.[0]);
    }
  };
  //!submitHandler
  const formSubmit=async()=>{
    const formData=new FormData()
    formData.append("courseName", courseInput.courseName);
    formData.append("courseTitle", courseInput.courseTitle);
    formData.append("courseDescription", courseDescription);
    formData.append("coursePrice", courseInput.coursePrice);
    formData.append("IntroVideo", courseInput.IntroVideo);
    formData.append("courseThumbnail", courseInput.courseThumbnail);
    await createCourse(formData)
  }

  return (
    <div>
      <Card className="mx-5">
        <CardTitle className="p-2 text-center text-2xl font-bold underline">
          {" "}
          Create Your Course
        </CardTitle>
        <CardContent>
          <CourseFormPage
            constants={{
              imagePreview,
              setImagePreview,
              courseDescription,
              setValue,
              courseInput,
            }}
            onChangeHandler={onChangeHandler}
          />
        </CardContent>
        <CardContent className="flex justify-end">
          <Button onClick={formSubmit} className="bg-blue-500 hover:bg-blue-500 cursor-pointer">
           {!isLoading? "Create Course":<Loader2 className="animate-spin"/>}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default AddCourse;
