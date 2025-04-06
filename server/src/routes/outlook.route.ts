import express from "express";
import {
  createOutlook,
  deleteOutLook,
  getOutLookBYmin,
} from "../controllers/outlook.controller";
import upload from "../utils/multer";
const outlookRouter = express.Router();

outlookRouter
  .route("/create-outlook")
  .post(upload.single("OutLookPhotoUrl"), createOutlook);
outlookRouter.route("/find/:TimeFrame").get(getOutLookBYmin);
outlookRouter.route("/delete/:id").delete(deleteOutLook)

export default outlookRouter;
