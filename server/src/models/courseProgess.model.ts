import mongoose, { Document, Model } from "mongoose";

interface courseProgress {
  courseId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  isComplete: Boolean;
  lectureProgressLectures: mongoose.Schema.Types.ObjectId[];
}

interface ICOURSEPROGRESSDocument extends courseProgress, Document {
  createdAt: Date;
  updatedAt: Date;
}

const courseProgressSchema = new mongoose.Schema<ICOURSEPROGRESSDocument>({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  lectureProgressLectures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],
});
export const COURSEPROGRESS: Model<ICOURSEPROGRESSDocument> =
  mongoose.model<ICOURSEPROGRESSDocument>(
    "CourseProgress",
    courseProgressSchema
  );
