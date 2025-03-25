import express from "express"
import { createCourseProgressRouter } from "../controllers/courseProgress.controller"

const courseProgressRoute=express.Router()

courseProgressRoute.route("/create-courseprogress").post(createCourseProgressRouter)

export default courseProgressRoute