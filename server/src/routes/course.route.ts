import express from "express";
import {
  CreateCourse,
  findAllCourse,
  findCourseByID,
  UpdateCourse,
} from "../controllers/course.controller";
import { authCheck } from "../middlewares/authentication";
import upload from "../utils/multer";
const courseRouter = express.Router();
courseRouter
  .route("/create-course")
  .post(authCheck, upload.single("courseThumbnail"), CreateCourse);
courseRouter
  .route("/:courseId")
  .patch(authCheck, upload.single("courseThumbnail"), UpdateCourse);
courseRouter.route("/:courseId").get(findCourseByID);
courseRouter.route("/").get(findAllCourse);

export default courseRouter;
