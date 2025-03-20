import express from "express";

const lectureProgressRoute = express.Router();

lectureProgressRoute.route("/:lectureProgressId/:lectureId");
