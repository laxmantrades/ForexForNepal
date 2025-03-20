"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useGetSectionByIdQuery } from "@/redux/api/section&LectureApi";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";

// todo types here
const LectureForm = ({ lectureInfo, onChange, submitHandler, isLoading }) => {
  const { videoUrl, lectureName } = lectureInfo;

  return (
    <Card>
      <CardTitle></CardTitle>
      <CardContent>
        <h1 className="text-xl font-bold">Lecture Name</h1>
        <Input value={lectureName} onChange={onChange} name="lectureName" />
        <h1 className="mt-5 text-xl font-bold">Lecture Video</h1>
        <Input value={videoUrl} onChange={onChange} name="videoUrl" />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={submitHandler}>
          {!isLoading ? "Submit" : <Loader2 className="animate-spin" />}
        </Button>
      </CardFooter>
    </Card>
  );
};
export default LectureForm;
