import { RequestHandler } from "express";
import {
  createSectionService,
  getSectionByCourseService,
  getSectionService,
  updateSectionService,
} from "../services/sectionService";

export const createSection: RequestHandler = async (req, res) => {
  try {
    const { sectionTitle } = req.body;

    const { courseId } = req.params;
    if (!courseId) {
      res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }
    const section = await createSectionService(sectionTitle, courseId);
    res.status(200).json({
      success: true,
      message: "Created Section Successfully",
      section,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something Went Wrong",
      success: false,
    });
  }
};
export const updateSection: RequestHandler = async (req, res) => {
  try {
    const { courseId, sectionId } = req.params;
    const { sectionTitle } = req.body;
    const section = await updateSectionService(sectionId, sectionTitle);
    res.status(200).json({
      success: true,
      message: "Successfully updated the section title!",
      section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};
export const getSectionBySectionID: RequestHandler = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const section = await getSectionService(sectionId);
    if (!section) {
      res.status(404).json({
        success: false,
        message: "Section Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfyll got section",
      section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};
export const getSectionByCourse: RequestHandler = async (req, res) => {
  try {
    const { courseId } = req.params;
    const section = getSectionByCourseService(courseId);
    if (!section) {
      res.status(404).json({
        success: false,
        message: "Section Not Found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      meessage: "Something went wrong!",
    });
  }
};
