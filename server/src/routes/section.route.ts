import express from "express"
import { createSection, updateSection } from "../controllers/section.controller"

const sectionRoute=express.Router()
sectionRoute.route("/:courseId/create-section").post(createSection)
sectionRoute.route("/:courseId/:sectionId").patch(updateSection)
sectionRoute.route("/:courseId/:sectionId").patch()


export default sectionRoute