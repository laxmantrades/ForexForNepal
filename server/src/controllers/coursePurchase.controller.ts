import { RequestHandler } from "express";
import {
  deleteCouponCodeServiceByID,
  getCouponCodeService,
  getCouponCodeServiceByCouponCode,
} from "../services/couponcodeService";
import { createCoursePurchaseService } from "../services/coursePurchaseService";
import {
  findCourse,
  findCourseServiceForCoursePurchase,
} from "../services/courseService";
import mongoose, { Types } from "mongoose";
import { findUserService } from "../services/userService";

export const coursePurchase: RequestHandler = async (req, res) => {
  try {
    const { couponCode } = req.body;
    const { courseId } = req.params;
    const userId = req?.id;

    //const courseIdObjectId = new mongoose.Schema.Types.ObjectId(courseId);

    //const userIdObjectId = new mongoose.Schema.Types.ObjectId(courseId);
    const course = await findCourseServiceForCoursePurchase(courseId);
    const findcouponCode = await getCouponCodeServiceByCouponCode(couponCode);
    const user = await findUserService(userId as string);
    if (!course) {
      res.status(404).json({
        message: "Course Not Found!",
        success: false,
      });
      return;
    }
    if (!user) {
      res.status(404).json({
        message: "User Not Found!",
        success: false,
      });
      return;
    }
    if (!findcouponCode) {
      res.status(404).json({
        message: "Invalid Coupon Code!",
        success: false,
      });
      return;
    }
    // todo add coursePayment from backend

    if (findcouponCode?.subtype === "permanent") {
      if (courseId === "67cdb7359d6376aa9395a8e0") {
        course.enrolledStudents.push(userId as any);
        await course.save();
        user?.coursePurhcased?.push(courseId as any); // Convert before pushing
        await user.save();
        res.status(200).json({
          message: "Successfully Purchased Course!",
          success: true,
        });
        return;
      }
    }
    ///todo
    if (findcouponCode?.subtype !== "free" || "permanent") {
      //! only save paid users information in db
      await createCoursePurchaseService(
        courseId as string,
        userId as string,
        course?.coursePrice as string //! always add from backend
      );
    }
    if (findcouponCode?.subtype === "permanent") {
      if (courseId !== "67cdb7359d6376aa9395a8e0") {
        res.status(404).json({
          message: "Wrong Coupon Code!",
          success: false,
        });
        return;
      }
      course.enrolledStudents.push(userId as any);
      await course.save();
      user?.coursePurhcased?.push(courseId as any); // Convert before pushing
      await user.save();
      res.status(200).json({
        message: "Successfully Purchased Course!",
        success: true,
      });
      return;
    }

    //! update course with the users information
    course.enrolledStudents.push(userId as any);
    await course.save();

    //! save the student is enrolled in the users models

    user?.coursePurhcased?.push(courseId as any); // Convert before pushing
    await user.save(); // Save the updated user document

    //!delete couponcode

    await deleteCouponCodeServiceByID(findcouponCode._id as any);

    res.status(200).json({
      message: "Successfully Purchased Course!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
