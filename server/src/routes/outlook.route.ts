import express from "express";
import {
  createOutlook,
  deleteOutLook,
  getOutLookBYmin,
} from "../controllers/outlook.controller";
import upload from "../utils/multer";
import { authCheck } from "../middlewares/authentication";
import { adminAuthenticationCheck } from "../middlewares/adminAuthentication";
const outlookRouter = express.Router();

outlookRouter
  .route("/create-outlook")
  .post(authCheck,adminAuthenticationCheck,upload.single("OutLookPhotoUrl"), createOutlook);
outlookRouter.route("/find/:TimeFrame").get(authCheck,getOutLookBYmin);
outlookRouter.route("/delete/:id").delete(authCheck,adminAuthenticationCheck,deleteOutLook)

export default outlookRouter;
