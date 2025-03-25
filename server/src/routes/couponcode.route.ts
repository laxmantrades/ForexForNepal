import express from "express";
import { createCouponCode, deleteCouponCode, getCouponCode, updateCouponCode } from "../controllers/coupon.controller";
const couponRouter = express.Router();
couponRouter.route("/").post(createCouponCode);
couponRouter.route("/:couponId").patch(updateCouponCode);
couponRouter.route("/").get(getCouponCode);
couponRouter.route("/:couponId").delete(deleteCouponCode);

export default couponRouter;
