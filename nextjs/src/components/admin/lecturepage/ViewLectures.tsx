"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetSectionByIdQuery } from "@/redux/api/section&LectureApi";
import { CirclePlay, Loader2, Plus } from "lucide-react";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLazyDeleteLectureQuery } from "@/redux/api/lectureApi";
import { toast } from "sonner";
import { lectureTypeForAdmin } from "@/types/lectureType";



const ViewLecture = () => {

 

  //!hooks
  const { sectionId } = useParams();
  const { data,refetch } = useGetSectionByIdQuery(sectionId);
  const [trigger, { data: deletedData, isLoading,isError,isSuccess }] =
    useLazyDeleteLectureQuery();


  useEffect(()=>{
    if (isSuccess) {
      toast.success(deletedData?.message || "Successfully Deleted Lecture!");
      refetch()
    }
    if (isError) {
      toast.error(deletedData?.message || "Failed to delete Lecture!");
    }
    
  },[isLoading,isError,deletedData])

  
  //!deleteHandler
  const deleteHandler = (lectureId:string) => {
    trigger({ sectionId, lectureId });
  };

  return (
    <div className="md:w-2/3 mx-auto mt-2 w-full p-2 md:p-0">
      <Card>
        <CardTitle className="mx-4 text-xl flex justify-between">
          <h1>{data?.section?.sectionTitle}</h1>
          <Link href={`${data?.section?._id}/create-lecture`}>
            <Button className="text-xl bg-black">
              <Plus className="bg-white text-black rounded-full " />
              Create Lecture
            </Button>
          </Link>
        </CardTitle>
        <CardContent>
          {data?.section?.lectures?.map((item: lectureTypeForAdmin) => (
            <div key={item._id} className="space-x-2.5 w-full">
              <div className="flex  space-y-2  mb-2 w-full justify-between ">
                {" "}
                <div className="flex">
                  <CirclePlay />
                  <Link href={`${data?.section?._id}/${item._id}`}>
                    <h1>{item?.lectureName}</h1>
                  </Link>
                </div>
                <Button onClick={()=>deleteHandler(item._id)} className="bg-red-600">
                  {!isLoading ? "Delete" : <Loader2 className="animate-spin" />}
                </Button>
              </div>
              <Input value={item.videoUrl} className="mb-10" disabled />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
export default ViewLecture;
