import mongoose, { Model } from "mongoose";
interface CourseSchema {
  courseName: String;
  courseTitle: String;
  lectureSection: mongoose.Schema.Types.ObjectId[];
  enrolledStudents: mongoose.Schema.Types.ObjectId[];
  courseDescription: string;
  coursePrice: string;
  courseThumbnail: string;
}
interface ICOURSEDocument extends CourseSchema, Document {
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new mongoose.Schema<ICOURSEDocument>(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    lectureSection: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    enrolledStudents: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    courseDescription: {
      type: String,
      required: true,
    },
    coursePrice: {
      type: String,
      required: true,
    },
    courseThumbnail: {
      type: String,
      //required:true
    },
  },
  {
    timestamps: true,
  }
);
export const COURSE: Model<ICOURSEDocument> = mongoose.model<ICOURSEDocument>(
  "Course",
  courseSchema
);
