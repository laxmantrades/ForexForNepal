import express from "express";
import {
  createSection,
  getSectionByCourse,
  getSectionBySectionID,
  updateSection,
} from "../controllers/section.controller";
import { authCheck } from "../middlewares/authentication";

const sectionRoute = express.Router();
sectionRoute
  .route("/:courseId/create-section")
  .post(/*authCheck,*/ createSection);
sectionRoute.route("/:courseId/:sectionId").patch(authCheck, updateSection);
//sectionRoute.route("/:sectionId").get(authCheck, getSectionBySectionID);
sectionRoute.route("/:courseId").get(getSectionByCourse);

export default sectionRoute;
