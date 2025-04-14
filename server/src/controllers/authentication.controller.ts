import { RequestHandler } from "express";
import passport from "passport";
import { createUser } from "../services/userService";
import { format } from "date-fns";
import { IUSERDocument, User } from "../models/user.model";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

let URI=""
if(typeof window !== "undefined"){
  URI=window.location.hostname=="forexfornepal" ? "https://forexfornepal.com/":"http://localhost:3000/"
}

export const GoogleCallBack: RequestHandler = async (req, res) => {
  // You need to explicitly call passport.authenticate to handle the authentication callback
  passport.authenticate(
    "google",
    { failureRedirect: "/", session: false },
    (err, data, token) => {
      try {
        if (err || !data) {
          // Handle error or failed authentication
          return res.redirect("/login"); // Redirect to homepage or show an error page
        }
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Only set this in production with HTTPS
          maxAge: 360000000, // 1 hour
        });
        return res.redirect(URI);
      } catch (error) {
        console.log(error);
      }
    }
  )(req, res); // Execute passport logic for Google OAuth
};

export const AuthCheck: RequestHandler = async (req, res) => {
  try {


    
    
    const date = new Date();
    const fromattedDate = format(date, "dd MMMM HH:mm yyyy");
    const user = await User.findByIdAndUpdate(req?.id, {
      lastLogin: fromattedDate,
    }).select("-createdAt -updatedAt -lastLogin -__v");

    res.status(200).json({
      authenticated: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
    return;
  }
};

export const Logout: RequestHandler = (req, res) => {
  try {
    req.logOut(() => {
      res.clearCookie("token");
      res.redirect(URI);
    });
  } catch (error) {
    console.log(error);
  }
};
