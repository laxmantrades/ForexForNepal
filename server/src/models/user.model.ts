import mongoose, { Document, Model } from "mongoose";
interface userSchema {
  fullName: string;
  email: string;
  role: "student" | "owner" | "admin";
  coursePurhcased: mongoose.Schema.Types.ObjectId[];
  refreshToken: string;
  photoUrl: string;
  lastLogin: string;
}
interface IUSERDocument extends userSchema, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUSERDocument>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "owner", "admin"],
      default: "student",
    },
    coursePurhcased: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Course",
    },
    refreshToken: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
    },
    lastLogin: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export const User: Model<IUSERDocument> = mongoose.model<IUSERDocument>(
  "User",
  userSchema
);
