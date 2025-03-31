import mongoose from "mongoose";



interface FAQ{
   question:string,
   answer:string
       
    
}
const faqSchema=new mongoose.Schema<FAQ>({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
})

export const FAQSCHEMA=mongoose.model<FAQ>("FAQSchema",faqSchema)