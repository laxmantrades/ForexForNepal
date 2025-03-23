import mongoose from "mongoose";

interface coursePurchase {
  courseId: mongoose.Schema.Types.ObjectId;
  userId:mongoose.Schema.Types.ObjectId,
  amount:string
}
const coursePurchase = new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    userId:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User"
    },
    amount:{
        type:String,
        required:true
    }
});
export const COURSEPURCHASE = mongoose.model("COURSEPURCHASE", coursePurchase);
