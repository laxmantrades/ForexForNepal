import { RequestHandler } from "express";
import passport from "passport";
import { createUser } from "../services/userService";
import { format } from "date-fns";
import { IUSERDocument, User } from "../models/user.model";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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
          maxAge: 36000000, // 1 hour
        });
        return res.redirect("http://localhost:3000/");
      } catch (error) {
        console.log(error);
      }
    }
  )(req, res); // Execute passport logic for Google OAuth
};

export const AuthCheck: RequestHandler = async (req, res) => {
  try {
    dotenv.config();
    console.log(req.id);
    
    const { token } = req.cookies;
    if (!token) {
      res.status(404).json({
        authenticated: false,
      });
      return;
    }

    const decode: any = jwt.verify(token, process?.env?.tokenSecret!);

    if (!decode.user) {
      res.status(404).json({
        authenticated: false,
      });
      return;
    }
    const userId = decode?.user;
    const date = new Date();
    const fromattedDate = format(date, "dd MMMM HH:mm yyyy");
    const user = await User.findByIdAndUpdate(userId, {
      lastLogin: fromattedDate,
    });

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
      res.redirect("http://localhost:3000");
    });
  } catch (error) {
    console.log(error);
  }
};
