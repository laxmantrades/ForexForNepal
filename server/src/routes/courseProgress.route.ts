import express from "express"
import { createCourseProgressRouter, getCourseProgressRouter } from "../controllers/courseProgress.controller"
import { authCheck } from "../middlewares/authentication"

const courseProgressRoute=express.Router()

courseProgressRoute.route("/create-courseprogress/:userId/:courseId/:lectureId").post(authCheck,createCourseProgressRouter)
courseProgressRoute.route("/:userId/:courseId").get(authCheck,getCourseProgressRouter)

export default courseProgressRoute