import express from "express"

const lectureRouter=express.Router()
lectureRouter.route("/:courseId/:sectionId/create-lecture").post()
lectureRouter.route("/:courseId/:sectionId/:lectureId").patch()
lectureRouter.route("/:courseId/:sectionId/:lectureId").delete()
lectureRouter.route("/:courseId/:sectionId/:lectureId").get()
lectureRouter.route("/:courseId/:sectionId/getAllLectures").get()


export default lectureRouter

