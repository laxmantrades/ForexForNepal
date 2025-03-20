import express from "express";

import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import authenticationRoute from "./routes/authentication.route";
import GoogleOauth from "./middlewares/googlestrategy";
import cors from "cors";
import connectDatabae from "./config/db.config";
import courseRouter from "./routes/course.route";
import sectionRoute from "./routes/section.route";
import lectureRouter from "./routes/lecture.route";
import { IUSERDocument, User } from "./models/user.model";

const app = express();

dotenv.config();

const corsOptions = {
  origin: [process.env.FRONTEND_URL_NEXTJS!, process.env.FRONTEND_URL_REACT!],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET!,
    resave: false,
    saveUninitialized: true,

    cookie: {
      httpOnly: true,
      //secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize()); //initialise passport for authentication
app.use(passport.session()); //use session for keeping track

passport.use(GoogleOauth);

passport.serializeUser((id: any, done) => done(null, id));
passport.deserializeUser(async(id: any, done) => {
  const user = await User.findById(id);





  return done(null, user as IUSERDocument);
});
app.use(authenticationRoute);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/section", sectionRoute);
app.use("/api/v1/lecture", lectureRouter);

connectDatabae().then(() =>
  app.listen(process.env.PORT, () => {
    console.log(`the server is listening on port ${process.env.PORT}`);
  })
);
