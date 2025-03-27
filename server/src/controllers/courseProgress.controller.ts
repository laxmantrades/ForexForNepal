import { RequestHandler } from "express";
import { COURSEPROGRESS } from "../models/courseProgess.model";
import mongoose, { Mongoose } from "mongoose";

const { Types } = mongoose;
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
      res.status(200).json({
        message: "Successfully marked lecture!",
        success: true,
        findCourseProgress,
      });
      return
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
    findCourseProgress.lectureProgressLectures.push(lectureId as any);
    await findCourseProgress.save();

    res.status(200).json({
      message: "Successfully marked lecture!",
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
    const { userId, courseId } = req.params;
    const findLectureProgress = await COURSEPROGRESS.findOne({
      userId,
      courseId,
    });

    if (!findLectureProgress) {
      res.status(404).json({
        message: "Course Progress Not Found!",
        sucess: false,
      });
      return;
    }
    res.status(200).json({
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
