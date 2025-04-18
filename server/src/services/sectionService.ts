import mongoose from "mongoose";
import { COURSE } from "../models/course.model";
import { SECTION } from "../models/section.model";

export const createSectionService = async (
  sectionTitle: string,
  courseId: string
) => {
  try {
    const section = await SECTION.create({ sectionTitle, courseId });


    const course = await COURSE.findByIdAndUpdate(
      courseId,
      { $push: { lectureSection: section._id } }, // Pushes the new section ID into the array
      { new: true } // Returns updated document
    );

    return section;
  } catch (error: any) {
    throw new Error("Error creating createSectionService")
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
    throw new Error("Error updating  updateSectionService")
  }
};

export const getSectionService = async (sectionId: string) => {
  try {
    const section = await SECTION.findById(sectionId).populate("lectures");
    return section;
  } catch (error) {
    throw new Error("Error getting  getSectionService")
  }
};
export const getSectionByCourseService = async (courseId: string) => {
  try {
    const section = await SECTION.find({ courseId })
    .select("-createdAt -updatedAt -__v")
      .populate({ path: "lectures", select: "id lectureName videoUrl" })
      .lean();
    return section;
  } catch (error) {
    throw new Error("Error getting  getSectionByCourseService")
  }
};
