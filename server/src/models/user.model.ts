import mongoose, { Document, Model, Types } from "mongoose";
interface userSchema {
  fullName: string;
  email: string;
  role: "student" | "owner" | "admin";
  coursePurhcased: mongoose.Schema.Types.ObjectId[];

  googleId: string;
  photoUrl: string;
  lastLogin: string;
}
export interface IUSERDocument extends userSchema, Document {
  _id: Types.ObjectId;
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
    coursePurhcased: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],

    googleId: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
    },
    lastLogin: {
      type: String,
      default: "Default",
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
