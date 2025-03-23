import express from "express";
import { createCouponCode, getCouponCode, updateCouponCode } from "../controllers/coupon.controller";
const couponRouter = express.Router();
couponRouter.route("/").post(createCouponCode);
couponRouter.route("/:couponId").patch(updateCouponCode);
couponRouter.route("/:couponId").get(getCouponCode);

export default couponRouter;
