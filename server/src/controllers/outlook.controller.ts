import { RequestHandler } from "express";
import { uploadImageOnCloudinary } from "../utils/cloudinary";
import { createOutLookService } from "../services/outLookService";

export const createOutlook: RequestHandler = async(req, res) => {
  try {

    const file=req.file
    const {Description,Pair,Time}=req.body
    if(!Description){
        res.status(400).json({
            message: "Please enter description!",
          });
          return
    }
    if(!Pair){
        res.status(400).json({
            message: "Please enter a pair!",
          });
          return
    }
    let OutLookPhotoUrl
    
    if (file) {
        OutLookPhotoUrl = await uploadImageOnCloudinary(
          file as Express.Multer.File
        );
      }
    
    const outlook=await createOutLookService(Description,Pair,OutLookPhotoUrl,Time)
    if(!outlook){
        res.status(400).json({
            message: "Failed To Create Course!",
          });
          return
    }

    res.status(200).json({
      message: "Something went Wrong",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went Wrong",
    });
    return;
  }
};

export const getOutLookBY15min:RequestHandler=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            message: "Something went Wrong",
          });
          return;
    }
}
