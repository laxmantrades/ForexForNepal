"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import LectureSectionWithComplete from "./LectureSectionsWithComplete";
import React from "react";
import { Section } from "@/types/sectionType";
import { lectureType } from "@/types/lectureType";
interface props {
  section: Section;
  
  OnVideoClick: (videoUrl:string,lecture:string) => void;
}

const LectureSection: React.FC<props> = ({
  section,

  OnVideoClick,
}) => {
  

  return (
    <Accordion type="single" collapsible className=" ">
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold">
          <h1>{section?.sectionTitle}</h1>
        </AccordionTrigger>
        {section?.lectures?.map((lecture: lectureType) => (
          <LectureSectionWithComplete
            key={lecture._id}
            OnVideoClick={OnVideoClick}
            lecture={lecture}
          />
        ))}
      </AccordionItem>
    </Accordion>
  );
};
export default LectureSection;
