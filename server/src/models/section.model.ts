import mongoose, { Document, Model } from "mongoose";
interface sectionSchema {
  sectionTitle: String;
  courseId:mongoose.Schema.Types.ObjectId,
  lectures: mongoose.Schema.Types.ObjectId[];
}
interface ISECTIONDocument extends sectionSchema, Document {
  createdAt: Date;
  updatedAt: Date;
}
const sectionSchema = new mongoose.Schema<ISECTIONDocument>(
  {
    sectionTitle: {
      type: String,
      required: true,
    },
    courseId:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
    },
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture",
      },
    ],
  },
  { timestamps: true }
);

export const SECTION: Model<ISECTIONDocument> =
  mongoose.model<ISECTIONDocument>("Section", sectionSchema);
