import { RequestHandler } from "express";
import { uploadImageOnCloudinary } from "../utils/cloudinary";
import {
  createOutLookService,
  deleteOutLookService,
  findOutLookByMinService,
} from "../services/outLookService";

export const createOutlook: RequestHandler = async (req, res) => {
  try {
    const file = req.file;
    const { Description, Pair, Time } = req.body;

    if (!Description) {
      res.status(400).json({
        message: "Please enter description!",
      });
      return;
    }
    if (!Pair) {
      res.status(400).json({
        message: "Please enter a pair!",
      });
      return;
    }
    let OutLookPhotoUrl;

    if (file) {
      OutLookPhotoUrl = await uploadImageOnCloudinary(
        file as Express.Multer.File
      );
    }

    const outlook = await createOutLookService(
      Pair,
      Description,
      OutLookPhotoUrl,
      Time
    );
    if (!outlook) {
      res.status(400).json({
        message: "Failed To Create OutLook!",
      });
      return;
    }

    res.status(200).json({
      message: "Successfully Posted OutLook",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went Wrong",
    });
    return;
  }
};

export const getOutLookBYmin: RequestHandler = async (req, res) => {
  try {
    const { TimeFrame } = req.params;

    const outLook = await findOutLookByMinService(TimeFrame);
    if (!outLook) {
      res.status(404).json({
        message: "OutLook Not Found!",
      });
      return;
    }

    res.status(200).json({
      outLook,
      message: "Successfully Got OutLook",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went Wrong",
    });
    return;
  }
};
export const deleteOutLook: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const outLook = await deleteOutLookService(id);
    if (!outLook) {
      res.status(404).json({
        message: "OutLook Not Found!",
      });
      return;
    }

    res.status(200).json({
      message: "  OutLook Successfully got deleted!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went Wrong",
    });
    return;
  }
};
