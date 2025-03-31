import express from "express";
import { coursePurchase } from "../controllers/coursePurchase.controller";
import { authCheck } from "../middlewares/authentication";
const coursePurchaseRouter = express.Router();

coursePurchaseRouter.route("/:courseId").post(authCheck,coursePurchase);

export default coursePurchaseRouter;
