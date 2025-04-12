import { RequestHandler } from "express";
import { IUSERDocument, User } from "../models/user.model";
import { findUserService } from "../services/userService";

export const adminAuthenticationCheck: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const user = await findUserService(req.id as string);

    if (user?.role !== "owner") {
      res.status(401).json({
        message: "Unauthorized Access",
        success: false,
      });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
    return;
  }
};
