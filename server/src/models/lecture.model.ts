import mongoose, { Document, Model } from "mongoose";
interface lectureSchema {
    lectureName:string,
    videoUrl:string,
   
    isPreviewFree:Boolean
}


interface ILectureDocument extends lectureSchema,Document{
    createdAt:Date,
    updatedAt:Date
}
const lectureSchema = new mongoose.Schema<ILectureDocument>({
  lectureName: {
    type: String,
    required: true,
  },

  videoUrl: {
    type: String,
    required: true,
  },
 
  isPreviewFree:{
    type:Boolean,
    default:false
  }

});



export const LECTURE:Model<ILectureDocument> = mongoose.model<ILectureDocument>("Lecture", lectureSchema);
