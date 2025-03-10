import express from "express"
import { createLecture, deleteLecture, getLecture, updateLecture } from "../controllers/lecture.controller"

const lectureRouter=express.Router()
lectureRouter.route("/:sectionId/create-lecture").post(createLecture)
lectureRouter.route("/:lectureId").patch(updateLecture)
lectureRouter.route("/:sectionId/:lectureId").delete(deleteLecture)
lectureRouter.route("/:lectureId").get(getLecture)
//lectureRouter.route("/:sectionId/getAllLectures").get()


export default lectureRouter

