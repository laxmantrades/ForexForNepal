import dotenv from "dotenv";
import { User } from "../models/user.model";
import { Profile } from "passport-google-oauth20";
const GoogleStrategy = require("passport-google-oauth20");

dotenv.config();
const GoogleOauth = new GoogleStrategy(
  {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,

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
      await user?.save();

      return done(null, user?._id);
    } catch (error) {
      console.log(error);
    }
  }
);

export default GoogleOauth;
