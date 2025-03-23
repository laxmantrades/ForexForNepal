import mongoose, { Model } from "mongoose";
interface CouponCode {
  couponCode: string;
  subtype: "free" | "paid";
}

const couponcodeSchema = new mongoose.Schema<CouponCode>({
  couponCode: {
    type: String,
    required: true,
  },
  subtype: {
    type: String,
    enum: ["free", "paid"],
  },
});
export const COUPONCODE: Model<CouponCode> = mongoose.model<CouponCode>(
  "Coupon",
  couponcodeSchema
);
