import mongoose, { Model } from "mongoose";

interface lectureProgress {
  lectureId: mongoose.Schema.Types.ObjectId;
  isViewed: Boolean;
}

interface ILECTUREPROGRESSDocument extends lectureProgress, Document {
  createdAt: Date;
  updatedAt: Date;
}
const lectureProgressSchema = new mongoose.Schema<ILECTUREPROGRESSDocument>(
  {
    lectureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecture",
    },
    isViewed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const LECTUREPROGRESS: Model<ILECTUREPROGRESSDocument> =
  mongoose.model<ILECTUREPROGRESSDocument>(
    "LectureProgress",
    lectureProgressSchema
  );
