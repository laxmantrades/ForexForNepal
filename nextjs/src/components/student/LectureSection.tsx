import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CirclePlay } from "lucide-react";
import { Separator } from "../ui/separator";

const LectureSection = ({ section, setVideoUrl, OnVideoClick }) => {
  

  return (
    <Accordion type="single" collapsible className=" ">
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold">
          <h1>{section?.sectionTitle}</h1>
        </AccordionTrigger>
        {section?.lectures?.map((lecture) => (
          <AccordionContent
            onClick={() => {OnVideoClick(lecture.videoUrl)
              console.log("clicked");
              }
            }
            className="h-20 bg-gray-100 cursor-pointer"
            key={lecture._id}
          >
            <Separator
              orientation="horizontal"
              className="bg-gray-300  w-full  "
            />
            <div>
              <div className="flex space-x-2 items-center ml-2 mt-5 ">
                <CirclePlay />
                <div>
                  <h1>{lecture?.lectureName}</h1>
                </div>
              </div>
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
export default LectureSection;
