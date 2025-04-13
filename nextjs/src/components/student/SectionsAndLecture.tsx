import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CirclePlay } from "lucide-react";
import { SectionType } from "@/types/courseType";


interface props{
  lectureSection:SectionType[]
}

const SectionAndLecture: React.FC<props> = ({ lectureSection }) => {
  console.log(lectureSection);

  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>
            {" "}
            <h1 className="text-2xl font-bold ">Course Content 1</h1>
            <h1>{"5"} lectures</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {lectureSection?.map((item: SectionType) => (
            <div key={item._id} className="flex  md:space-x-2.5 md:space-y-2.5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1 ">
                  <AccordionTrigger className="text-xl flex ">
                    <h1 className="">{item.sectionTitle}</h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.lectures.map((lecture: {
                      _id:string
                      lectureName:string
                    }) => (
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
export default SectionAndLecture;
