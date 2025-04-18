import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { CirclePlay, } from "lucide-react";
import {
  useCreateSectionMutation,
  useGetAllSectionWithLecturesQuery,
  useUpdateSectionMutation,
} from "@/redux/api/section&LectureApi";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import EditSectionForm from "./EditSectionForm";

import Link from "next/link";
import { Lecture, SectionType } from "@/types/courseType";



const AdminShowLecture = () => {
  const [sectionTitle, setSectionTitle] = useState<string>("");
  const { editCourseId } = useParams();

  //api calls
  const { data } = useGetAllSectionWithLecturesQuery(editCourseId);
  
  
  const [updateSection, { data: updatedData, isLoading, isError, isSuccess, }] =
    useUpdateSectionMutation();
  const [
    createSection,
    {
      data: createdData,
      isSuccess: isSuccessCreation,
      isError: isErrorCreation,
      
    },
  ] = useCreateSectionMutation();

  //submit handlers
  const submitHandlerUpdate = async (sectionId: string) => {
    try {
      updateSection({ sectionId, sectionTitle });
    } catch (error) {
      throw new Error("Something went Wrong!")
    }
  };
  const submitHandlerCreate = async () => {
    try {
      createSection({ courseId: editCourseId, sectionTitle });
    } catch (error) {
      throw new Error("Something went Wrong!")
  };
  useEffect(() => {
    if (isSuccess) {
      
      toast.success(updatedData?.message || "Successfully Updated Section!");
    }
    if (isError) {
      toast.error(updatedData?.message || "Failed to update section!");
    }
    if (isSuccessCreation) {
      toast.success(createdData?.message || "Successfully Created Section!");
    }
    if (isErrorCreation) {
      toast.error(createdData?.message || "Failed to create section!");
    }
  }, [isSuccess, isError, isErrorCreation, isSuccessCreation,createdData,updatedData]);

  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle className="flex justify-between text-2xl">
            {" "}
            <div>
              <h1 className=" font-bold ">Course Content 1</h1>
              <h1>{"5"} lectures</h1>
            </div>
            <EditSectionForm
              sectionTitle={sectionTitle}
              setSectionTitle={setSectionTitle}
              isLoading={isLoading}
              submitHandler={submitHandlerCreate}
              sectionId={editCourseId}
              sectionPurpose={"Create Section"}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data?.section?.map((item: SectionType) => (
            <div key={item._id} className="flex  md:space-x-2.5 md:space-y-2.5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1 ">
                  <AccordionTrigger className="text-xl flex ">
                    <Link href={`/admin/section/${item._id}`}>
                      {" "}
                      <h1 className="">{item.sectionTitle}</h1>
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-5">
                      <EditSectionForm
                        sectionTitle={sectionTitle}
                        setSectionTitle={setSectionTitle}
                        isLoading={isLoading}
                        submitHandler={submitHandlerUpdate}
                        sectionId={item?._id}
                        sectionPurpose={"Update Section"}
                      />
                    </div>

                    {item.lectures.map((lecture: Lecture) => (
                      <div
                        key={lecture._id}
                        className="flex  space-x-3.5 space-y-2.5"
                      >
                        <CirclePlay /> <h1>{lecture.lectureName}</h1>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
}
export default AdminShowLecture;
