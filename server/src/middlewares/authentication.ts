import { RequestHandler } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export const authCheck: RequestHandler = (req, res, next) => {
  try {
    const{token}=req.cookies
    if(!token){
      res.status(404).json({
        message:"Invalid Token"
      })
      return
      
    }
    const decode=jwt.verify(token,process.env.tokenSecret!) as jwt.JwtPayload
    req.id=decode?.user
    
    
    
    
    if (!decode) {
      res.status(401).json({
        message: "Unauthorized Access",
      });
      return;
    }
    next();
  } catch (error) {
    console.log(error);
    
    console.log("Something went wrong!");
  }
};
