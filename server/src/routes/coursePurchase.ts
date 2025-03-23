import express from "express";
import { coursePurchase } from "../controllers/coursePurchase.controller";
const coursePurchaseRouter = express.Router();

coursePurchaseRouter.route("/:courseId").post(coursePurchase);

export default coursePurchaseRouter;
