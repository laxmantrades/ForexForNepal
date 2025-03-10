import express from "express"
import { createSection, getSectionBySectionID, updateSection } from "../controllers/section.controller"

const sectionRoute=express.Router()
sectionRoute.route("/:courseId/create-section").post(createSection)
sectionRoute.route("/:courseId/:sectionId").patch(updateSection)
sectionRoute.route("/:sectionId").get(getSectionBySectionID)


export default sectionRoute