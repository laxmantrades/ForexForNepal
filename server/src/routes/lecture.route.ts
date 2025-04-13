import express from "express";
import {
  createLecture,
  deleteLecture,
  getLecture,
  updateLecture,
} from "../controllers/lecture.controller";
import { authCheck } from "../middlewares/authentication";
import { adminAuthenticationCheck } from "../middlewares/adminAuthentication";

const lectureRouter = express.Router();
lectureRouter
  .route("/:sectionId/create-lecture")
  .post(authCheck,adminAuthenticationCheck, createLecture);
lectureRouter.route("/:lectureId").patch(authCheck,adminAuthenticationCheck, updateLecture);
lectureRouter.route("/:sectionId/:lectureId").delete(authCheck,adminAuthenticationCheck, deleteLecture);
lectureRouter.route("/:lectureId").get(authCheck, getLecture);
//lectureRouter.route("/:sectionId/getAllLectures").get()

export default lectureRouter;
