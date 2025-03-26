import { RequestHandler } from "express";
import { COURSEPROGRESS } from "../models/courseProgess.model";
import mongoose from "mongoose";


export const createCourseProgressRouter: RequestHandler = async (req, res) => {
  try {
    const { userId, courseId, lectureId } = req.params;

    if (!userId || !courseId || !lectureId) {
      res.status(404).json({
        message: "Invalid userId or courseId or LectureId",
        success: false,
      });
      return;
    }

    let findCourseProgress = await COURSEPROGRESS.findOne({ userId, courseId });
    if (!findCourseProgress) {
      findCourseProgress = await COURSEPROGRESS.create({
        userId,
        courseId,
        lectureProgressLectures: lectureId,
      });
      return;
    }
   

    const lectureExits = findCourseProgress?.lectureProgressLectures?.some(
      (lecture) => lecture == (lectureId as any)
    );

    if (lectureExits) {
      res.status(404).json({
        message: "The lecture is already complete",
      });
      return;
    }
    findCourseProgress.lectureProgressLectures.push(
      new mongoose.Schema.Types.ObjectId(lectureId)
    );
    await findCourseProgress.save();

    res.status(200).json({
      message: "Something went wrong!",
      success: true,
      findCourseProgress,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
export const getCourseProgressRouter: RequestHandler = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    const findLectureProgress = await COURSEPROGRESS.findOne({
      userId,
      courseId,
    });
    if (!findLectureProgress) {
      res.status(404).json({
        message: "Course Progress Not Found!",
        sucess: false,
      });
    }
    res.status(404).json({
      message: "Succefully Got Course Progress",
      success: true,
      findLectureProgress,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};
