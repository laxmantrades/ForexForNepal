import { RequestHandler } from "express";
import { COURSEPROGRESS } from "../models/courseProgess.model";

export const createCourseProgressRouter: RequestHandler = async (req, res) => {
  try {
    const { userId, courseId, lectureId } = req.body;

    if(!userId||courseId||lectureId){
        res.status(404).json({
            message: "Invalid userId or courseId or LectureId",
            success: false,
          });
    }

    let findCourseProgress=await COURSEPROGRESS.findOne({userId,courseId})
    if(!findCourseProgress){
        findCourseProgress = await COURSEPROGRESS.create({
            userId,
            courseId,
            lectureProgressLectures:lectureId
          });
    }
    findCourseProgress.lectureProgressLectures.push(lectureId)
    await findCourseProgress.save()

    

    
    


    res.status(200).json({
      message: "Something went wrong!",
      success: true,
      findCourseProgress
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
