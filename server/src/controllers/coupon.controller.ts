import { RequestHandler } from "express";
import { COUPONCODE } from "../models/couponcode.model";
import { createCouponCodeService, getCouponCodeService, updateCouponCodeService } from "../services/couponcodeService";

export const createCouponCode:RequestHandler=async(req,res)=>{
try {
    const {couponCode,subtype}=req.body
    const createCoupon=await createCouponCodeService(couponCode as string,subtype as string)
    res.status(200).json({
        message:"Successfully created Coupon Code",
        createCoupon
    })

    
} catch (error) {
    console.log(error);
    
    res.status(400).json({
        message:"Something went wrong!",
        success:false
    })
}
}
export const updateCouponCode:RequestHandler=async(req,res)=>{
    try {
        const {couponId}=req.params
        const{couponCode,subtype}=req.body
        const couponcode=await updateCouponCodeService(couponCode,subtype,couponId)
        if(!couponcode){
            res.status(404).json({
                message:" Coupon Code Not Found",
               success:false
            })
        }
      
        res.status(200).json({
            message:"Successfully got Coupon Code",
            couponcode
           
        })
    
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong!",
            success:false
        })
    }
}

export const getCouponCode:RequestHandler=async(req,res)=>{
    try {
        const {couponId}=req.params
        
        const couponcode=await getCouponCodeService()
        if(!couponcode){
            res.status(404).json({
                message:" Coupon Code Not Found",
               success:false
            })
        }
      
        res.status(200).json({
            message:"Successfully got Coupon Code",
            couponcode
           
        })
    
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong!",
            success:false
        })
    }
}