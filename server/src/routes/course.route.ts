import express from "express";
import {
  CreateCourse,
  findAllCourse,
  findCourseByID,
  UpdateCourse,
} from "../controllers/course.controller";
import { authCheck } from "../middlewares/authentication";
const courseRouter = express.Router();
courseRouter.route("/create-course").post(authCheck, CreateCourse);
courseRouter.route("/:courseId").patch(authCheck, UpdateCourse);
courseRouter.route("/:courseId").get(authCheck, findCourseByID);
courseRouter.route("/").get( findAllCourse);

export default courseRouter;
