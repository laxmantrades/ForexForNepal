import { RequestHandler } from "express";
import { IUSERDocument, User } from "../models/user.model";

export const adminAuthentication: RequestHandler = async (req, res, next) => {
  try {
    const user = (req.user as IUSERDocument).role;
    if (user!=="owner") {
      res.status(401).json({
        message: "Unauthorized Access",
        success:false
      });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};
