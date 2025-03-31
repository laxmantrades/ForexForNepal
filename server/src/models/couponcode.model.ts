import mongoose, { Model } from "mongoose";
interface CouponCode {
  couponCode: string;
  subtype: "free" | "paid"|"permanent";
}

const couponcodeSchema = new mongoose.Schema<CouponCode>({
  couponCode: {
    type: String,
    required: true,
  },
  subtype: {
    type: String,
    enum: ["free", "paid","permanent"],
  },
});
export const COUPONCODE: Model<CouponCode> = mongoose.model<CouponCode>(
  "Coupon",
  couponcodeSchema
);
