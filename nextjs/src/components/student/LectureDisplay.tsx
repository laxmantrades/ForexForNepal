import { Separator } from "../ui/separator";
import VideoComponent from "./VideoComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LectureDisplay = () => {
  return (
    <div className="flex mt-30 space-x-10 w-full ">
      <div className="w-2/3 ml-2 ">
      <Card>
  
  <CardContent>
  <VideoComponent/>
  </CardContent>
  
</Card>

        <Separator orientation="vertical" />
      </div>

      
      <div className="w-96 mx-2 text-left border">
        <h1 className="text-2xl font-bold">Forex Beginner </h1>
        
      </div>

    </div>
  );
};
export default LectureDisplay;
