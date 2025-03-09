import mongoose from "mongoose";
import { COURSE } from "../models/course.model";
import { SECTION } from "../models/section.model";

export const createSectionService = async (
  sectionTitle: string,
  courseId: string
) => {
  try {
    const section = await SECTION.create({ sectionTitle });
    console.log(section);

    const course = await COURSE.findByIdAndUpdate(
      courseId,
      { $push: { lectureSection: section._id } }, // Pushes the new section ID into the array
      { new: true } // Returns updated document
    );

    return section;
  } catch (error: any) {
    console.log(error.message);
  }
};
export const updateSectionService = async (
  sectionId: string,
  sectionTitle: string
) => {
  try {
    const section = await SECTION.findByIdAndUpdate(
      sectionId,
      {
        sectionTitle,
      },
      {
        new: true,
      }
    );
    return section;
  } catch (error) {
    console.log(error);
  }
};
