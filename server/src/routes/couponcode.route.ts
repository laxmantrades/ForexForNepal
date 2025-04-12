import express from "express";
import {
  createCouponCode,
  deleteCouponCode,
  getCouponCode,
  updateCouponCode,
} from "../controllers/coupon.controller";
import { adminAuthenticationCheck } from "../middlewares/adminAuthentication";
import { authCheck } from "../middlewares/authentication";
const couponRouter = express.Router();
couponRouter.route("/").post(authCheck,adminAuthenticationCheck,createCouponCode);
couponRouter.route("/:couponId").patch(authCheck,adminAuthenticationCheck,updateCouponCode);
couponRouter.route("/").get(authCheck,adminAuthenticationCheck,getCouponCode);
couponRouter.route("/:couponId").delete(authCheck,adminAuthenticationCheck,deleteCouponCode);

export default couponRouter;
