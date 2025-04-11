"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";


import { Loader2 } from "lucide-react";
import { ChangeEventHandler } from "react";


// todo types here
interface props{
  lectureInfo:{
    lectureName: string,
    videoUrl: string,
  },
  onChange:ChangeEventHandler<HTMLInputElement>,
  submitHandler:()=>void
  isLoading:boolean
}
const LectureForm:React.FC<props> = ({ lectureInfo, onChange, submitHandler, isLoading }) => {
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
