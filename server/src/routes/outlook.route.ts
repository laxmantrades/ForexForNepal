import express from "express"
import { createOutlook } from "../controllers/outlook.controller"
import upload from "../utils/multer"
const outlookRouter=express.Router()

outlookRouter.route("/create-outlook").post(upload.single("OutLookPhotoUrl"),createOutlook)
export default outlookRouter