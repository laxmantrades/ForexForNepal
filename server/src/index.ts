import express from "express";

import dotenv from "dotenv";
import passport from "passport";

import authenticationRoute from "./routes/authentication.route";
import GoogleOauth from "./middlewares/googlestrategy";
import cors from "cors";
import connectDatabae from "./config/db.config";
import courseRouter from "./routes/course.route";
import sectionRoute from "./routes/section.route";
import lectureRouter from "./routes/lecture.route";
import { IUSERDocument, User } from "./models/user.model";
import couponRouter from "./routes/couponcode.route";
import coursePurchaseRouter from "./routes/coursePurchase";
import courseProgressRoute from "./routes/courseProgress.route";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const corsOptions = {
  origin: [process.env.FRONTEND_URL_NEXTJS!],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize()); //initialise passport for authentication

//initialized google0auth
passport.use(GoogleOauth);

app.use(authenticationRoute);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/section", sectionRoute);
app.use("/api/v1/lecture", lectureRouter);
app.use("/api/v1/coupon", couponRouter);
app.use("/api/v1/coursepurchase", coursePurchaseRouter);
app.use("/api/v1/courseprogress", courseProgressRoute);

connectDatabae().then(() =>
  app.listen(process.env.PORT, () => {
    console.log(`the server is listening on port ${process.env.PORT}`);
  })
);
