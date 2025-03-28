import mongoose from "mongoose";



interface FAQ{
    faq:[{
        question:string,
        answer:string 
    }]
       
    
}
const faqSchema=new mongoose.Schema({

})

export const FAQSCHEMA=mongoose.model("FAQSCCHEMA",faqSchema)