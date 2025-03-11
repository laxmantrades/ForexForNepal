import { RequestHandler } from "express";

const createLectureProgress: RequestHandler = async (req, res) => {
  try {





    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went Wrong!",
    });
    return
  }
};
