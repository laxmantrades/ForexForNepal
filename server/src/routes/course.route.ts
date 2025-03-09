import express from "express"
import { CreateCourse, findAllCourse, findCourseByID, UpdateCourse } from "../controllers/course.controller"
const courseRouter=express.Router()
courseRouter.route("/create-course").post(CreateCourse)
courseRouter.route("/:courseId").patch(UpdateCourse)
courseRouter.route("/:courseId").get(findCourseByID)
courseRouter.route("/").get(findAllCourse)

export default courseRouter