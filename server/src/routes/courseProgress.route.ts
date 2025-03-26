import express from "express"
import { createCourseProgressRouter, getCourseProgressRouter } from "../controllers/courseProgress.controller"

const courseProgressRoute=express.Router()

courseProgressRoute.route("/create-courseprogress/:userId/:courseId/:lectureId").post(createCourseProgressRouter)
courseProgressRoute.route("/:userId/:courseId").get(getCourseProgressRouter)

export default courseProgressRoute