import { RequestHandler } from "express";

export const authCheck: RequestHandler = (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.status(401).json({
        message: "Unauthorized Access",
      });
      return;
    }
    next();
  } catch (error) {
    console.log("Something went wrong!");
  }
};
