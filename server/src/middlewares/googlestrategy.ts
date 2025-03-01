import dotenv from "dotenv"
const GoogleStrategy =require("passport-google-oauth20")

dotenv.config()
const GoogleOauth= new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
     
      prompt: 'select_account'
    },
    (
      accessToken: any,
      refreshToken: any,
      profile: unknown,
      done: any
    ) => {
        
        
      return done(null, profile);
    }
  )

export default GoogleOauth