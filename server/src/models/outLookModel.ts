import mongoose from "mongoose";

interface outLookSchema {
  Pair: String;
  Description: String;
  OutLookPhotoUrl:String,
  Time:String


}
const outLookSchema= new mongoose.Schema<outLookSchema>(
  {
    Pair: {
      type: String,
      enum: ["EURUSD", "USDCHF"],
    },
    Description: {
      type: String,
      required: true,
    },
    OutLookPhotoUrl: {
      type: String,
      required: true,
    },
    Time:{
        type: String,
      enum:["4H","15 Min"]
    }
  },
  {
    timestamps: true,
  }
);

export const OUTLOOKSchema = mongoose.model<outLookSchema>("OutLook", outLookSchema);
