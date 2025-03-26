"use client";

import { Label } from "@/components/ui/label";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleCheckBig, CirclePlay } from "lucide-react";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import LectureSectionWithComplete from "./LectureSectionsWithComplete";
import React from "react";

const LectureSection = ({ section, setVideoUrl, OnVideoClick }) => {
  const isComplete = true;

  return (
    <Accordion type="single" collapsible className=" ">
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold">
          <h1>{section?.sectionTitle}</h1>
        </AccordionTrigger>
        {section?.lectures?.map((lecture) => (
         <LectureSectionWithComplete key={lecture._id} OnVideoClick={OnVideoClick} lecture={lecture}/>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
export default LectureSection;
