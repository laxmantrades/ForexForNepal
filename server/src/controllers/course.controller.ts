import { RequestHandler } from "express";
import {
  createCourse,
  findALLCourse,
  findCourse,
  findCourseAndUpdate,
} from "../services/courseService";
import { COURSE } from "../models/course.model";
import {
  deleteMediaFromCloudinary,
  uploadImageOnCloudinary,
} from "../utils/cloudinary";

export const CreateCourse: RequestHandler = async (req, res) => {
  try {
    

    const { courseName, courseTitle, courseDescription, coursePrice } =
      req.body;
    const file = req.file;

    let courseThumbnail;
    if (file) {
      courseThumbnail = await uploadImageOnCloudinary(
        file as Express.Multer.File
      );
    }

    const UserData = {
      courseName,
      courseTitle,
      courseDescription,
      coursePrice,
      courseThumbnail,
    };
    const user = await createCourse(UserData);
    res.status(200).json({
      message: "Successfully created Course",
      course: user,
      success: true,
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Something went Wrong",
      success: false,
    });
    return;
  }
};
export const UpdateCourse: RequestHandler = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { courseName, coursePrice, courseDescription, courseTitle } =
      req.body;
    const file = req.file;

    if (courseId.length !== 24) {
      res.status(400).json({
        message: "You failed the test",
      });
      return;
    }

    const coursefind = await findCourse(courseId);
    let courseThumbnail;
    if (file) {
      if (coursefind?.courseThumbnail) {
        const publicID = coursefind?.courseThumbnail
          ?.split("/")
          .pop()
          ?.split(".")[0];
        await deleteMediaFromCloudinary(publicID as string);
      }
      courseThumbnail = await uploadImageOnCloudinary(
        file as Express.Multer.File
      );
    }

    const updatedData = {
      courseName,
      coursePrice,
      courseDescription,
      courseTitle,
      courseThumbnail,
    };

    const course = await findCourseAndUpdate(courseId, updatedData);
    if (!course) {
      res.status(404).json({
        message: "Course Not Found",
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: "Successfully Updated Course",
      success: true,
      course,
    });
    return;
  } catch (error: any) {
   

    res.status(500).json({
      message: "Some Interal Server Error",
      success: false,
    });
  }
};
export const findCourseByID: RequestHandler = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await findCourse(courseId);
    if (!course) {
      res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
      return;
    }
    res.status(200).json({
      message: "Successgully Fetched Course",
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some Interal Server Error",
      success: false,
    });
  }
};
export const findAllCourse: RequestHandler = async (req, res) => {
  try {
    const course = await findALLCourse();
    res.status(200).json({
      message: "Successfully fetched the course",
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some Interal Server Error",
      success: false,
    });
  }
};
