import { RequestHandler } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export const authCheck: RequestHandler = (req, res, next) => {
  try {
    const{token}=req.cookies
    const decode=jwt.verify(token,"laxman")
    if (!decode) {
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
