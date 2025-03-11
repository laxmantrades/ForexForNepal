import { RequestHandler } from "express";

export const authCheck: RequestHandler = (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      next();
    }
    res.status(401).json({
      message: "Unauthorized Access",
    });
  } catch (error) {
    console.log("Something went wrong!");
  }
};
