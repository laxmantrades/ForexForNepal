import express from "express";
import {
  createSection,
  getSectionByCourse,
  getSectionBySectionID,
  updateSection,
} from "../controllers/section.controller";
import { authCheck } from "../middlewares/authentication";
import { adminAuthenticationCheck } from "../middlewares/adminAuthentication";

const sectionRoute = express.Router();
sectionRoute
  .route("/:courseId/create-section")
  .post(authCheck, adminAuthenticationCheck, createSection);
sectionRoute
  .route("/:sectionId")
  .patch(authCheck, adminAuthenticationCheck, updateSection);
sectionRoute.route("/:sectionId").get(getSectionBySectionID);
sectionRoute.route("/course/:courseId").get(getSectionByCourse);

export default sectionRoute;
