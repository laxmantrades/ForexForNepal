import express from "express";
import {
  createLecture,
  deleteLecture,
  getLecture,
  updateLecture,
} from "../controllers/lecture.controller";
import { authCheck } from "../middlewares/authentication";

const lectureRouter = express.Router();
lectureRouter
  .route("/:sectionId/create-lecture")
  .post(authCheck, createLecture);
lectureRouter.route("/:lectureId").patch(authCheck, updateLecture);
lectureRouter.route("/:sectionId/:lectureId").delete(authCheck, deleteLecture);
lectureRouter.route("/:lectureId").get(authCheck, getLecture);
//lectureRouter.route("/:sectionId/getAllLectures").get()

export default lectureRouter;
