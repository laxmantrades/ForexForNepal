import dotenv from "dotenv";
import { User } from "../models/user.model";
import { Profile } from "passport-google-oauth20";
const GoogleStrategy = require("passport-google-oauth20");
import jwt from "jsonwebtoken";

dotenv.config();
const isProduction = process.env.NODE_ENV === "production";
const GoogleOauth = new GoogleStrategy(
  {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: isProduction
      ? "https://api.forexfornepal.com/auth/google/callback"
      : `http://localhost:${process.env.PORT}/auth/google/callback`,

    prompt: "select_account",
  },
  async (accessToken: any, refreshToken: any, profile: Profile, done: any) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        if (profile.emails && profile.photos) {
          user = await User.create({
            fullName: profile.displayName,
            email: profile.emails[0]?.value,
            photoUrl: profile.photos[0].value,
            googleId: profile.id,
          });
        }
      }
      const token = jwt.sign({ user: user?._id }, process.env.tokenSecret!);

      await user?.save();

      return done(null, user?._id, token);
    } catch (error) {
      console.log(error);
    }
  }
);

export default GoogleOauth;
