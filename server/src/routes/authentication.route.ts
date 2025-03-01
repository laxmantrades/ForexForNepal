import express from "express";
import {
  AuthCheck,
  GoogleCallBack,
  Logout,
} from "../controllers/authentication.controller";
import passport from "passport";

const authenticationRoute = express.Router();

//authenticationRoute.route("/login").post()
authenticationRoute.route("/login").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
    //accessType: "offline", // Request a refresh token for offline access
    //prompt: "consent",
  })
);
authenticationRoute.get("/auth/google/callback",GoogleCallBack);

authenticationRoute.route("/authcheck").get(AuthCheck);
authenticationRoute.route("/logout").get(Logout);

export default authenticationRoute;
