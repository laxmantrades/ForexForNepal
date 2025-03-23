import { COUPONCODE } from "../models/couponcode.model";

export const createCouponCodeService = async (
  couponCode: string,
  subtype: string
) => {
  try {
    const newcouponCode = await COUPONCODE.create({
      couponCode,
      subtype,
    });
    return newcouponCode;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
export const updateCouponCodeService = async (
  couponCode: string,
  subtype: string,
  id: string
) => {
  try {
    const updateCouponCode = await COUPONCODE.findByIdAndUpdate(id, {
      couponCode,
      subtype,
    });
    return updateCouponCode;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
export const getCouponCodeService = async (
   
    
  ) => {
    try {
      const couponCode = await COUPONCODE.find();
      return couponCode;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  export const getCouponCodeServiceByCouponCode=async(couponCode:string)=>{
    try {
        const couponCodeF = await COUPONCODE.findOne({couponCode})
        return couponCodeF
    } catch (error) {
        throw new Error("Something went wrong");
        
    }
  }
  export const deleteCouponCodeServiceByCouponCode=async(couponCode:string)=>{
    try {
         await COUPONCODE.findOneAndDelete({couponCode})
        
    } catch (error) {
        throw new Error("Something went wrong");
        
    }
  }
