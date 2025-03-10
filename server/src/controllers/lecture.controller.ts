import { RequestHandler } from "express";
import {
  createLectureService,
  deleteLectureService,
  getLectureService,
  updateLectureService,
} from "../services/lectureService";

export const createLecture: RequestHandler = async (req, res) => {
  try {
    const { sectionId } = req.params;
    console.log(sectionId);

    const { lectureName, videoUrl, isPreviewFree } = req.body;

    if (!lectureName || !videoUrl) {
      res.status(404).json({
        success: false,
        message: "Please provide the required Field",
      });
    }
    const lectureData = {
      lectureName,
      videoUrl,
      isPreviewFree,
    };
    const lecture = await createLectureService(lectureData, sectionId);
    res.status(200).json({
      message: "Successfully created lecture",
      success: false,
      lecture,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};
export const getLecture: RequestHandler = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const lecture = await getLectureService(lectureId);
    if (!lecture) {
      res.status(404).json({
        message: "Lecture Not Found!",
        success: false,
      });
      return;
    }
    res.status(200).json({
      message: "Successfully fetched ",
      success: true,
      lecture,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};
export const updateLecture: RequestHandler = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const { lectureName, videoUrl, isPreviewFree } = req.body;
    const lectureData = {
      lectureName,
      videoUrl,
      isPreviewFree,
    };
    const lecture = await updateLectureService(lectureData, lectureId);
    if (!lecture) {
      res.status(404).json({
        message: "Lecutre not found!",
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully updated lecture!",
      lecture,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
export const deleteLecture: RequestHandler = async (req, res) => {
  try {
    const { lectureId, sectionId } = req.params;
    const lecture = await deleteLectureService(lectureId, sectionId);
    if (!lecture) {
      res.status(404).json({
        message: "Lecture Not Found",
        success: false,
      });
      return;
    }
    res.status(200).json({
      message: "Successfully Deleted Lecture",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
