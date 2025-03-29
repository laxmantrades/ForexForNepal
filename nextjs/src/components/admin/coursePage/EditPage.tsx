"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import { useParams, useRouter } from "next/navigation";
import {
  useEditCourseMutation,
  useGetCourseByIdQuery,
} from "@/redux/api/courseApi";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import CourseFormPage from "./CourseFormPage";

const EditPage = () => {
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

  //!data fetching
  const { editCourseId } = useParams();
  const router = useRouter();

  const { data } = useGetCourseByIdQuery(editCourseId);
  const [editCourse, { data: editCourseData, isLoading, isSuccess, isError }] =
    useEditCourseMutation();

  //!change Handler
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name, type, files } = e.target;
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

  //!submit handler

  const formSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("courseName", courseInput.courseName);
      formData.append("courseTitle", courseInput.courseTitle);
      formData.append("courseDescription", courseDescription);
      formData.append("coursePrice", courseInput.coursePrice);
      formData.append("IntroVideo", courseInput.IntroVideo);
      formData.append("courseThumbnail", courseInput.courseThumbnail);
      await editCourse({ formData, courseId: editCourseId });
    } catch (error) {
      console.log(error);
    }
  };


  //!toast + refetch
  useEffect(() => {
    if (data) {
      setCourseInput({
        courseName: data.course?.courseName || "",

        coursePrice: data.course?.coursePrice || "",
        courseThumbnail: data.course?.courseThumbnail || "",
        courseTitle: data.course?.courseTitle || "",
        IntroVideo: data.course?.IntroVideo || "",
      });
      setValue(data.course.courseDescription || "");
    }
  }, [data]);

  
  useEffect(() => {
    if (isSuccess) {
      toast.success(editCourseData?.message || "Successfully Updated COurse");
      router.push("/courses");
    }
    if (isError) {
      toast.success(editCourseData?.message || "Something went wrong");
    }
  }, [isSuccess, isError]);
  return (
    <div className="p-5">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <h1 className="text-xl font-bold">Edit Your Course</h1>
            <Link href={`${editCourseId}/sections`}>
            {/** todo faq */}
            <Button className="text-xl font-bold cursor-pointer">
                View FAQs
              </Button>
              <Button className="text-xl font-bold cursor-pointer">
                View Sections
              </Button>
            </Link>
          </CardTitle>
        </CardHeader>

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
        <CardFooter className="flex justify-center">
          <Button onClick={formSubmit} className="px-10 text-xl">
            {!isLoading ? (
              "Update"
            ) : (
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default EditPage;
