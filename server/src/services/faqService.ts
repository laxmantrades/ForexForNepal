import { COURSE } from "../models/course.model";
import { FAQSCHEMA } from "../models/faq.model";

export const createFaqService = async (question: string, answer: string) => {
  try {
    const faq =await FAQSCHEMA.create({ question, answer });
    return faq;
  } catch (error) {
    return error;
  }
};

export const findAllFaqService=async()=>{
    try {
        const faq=await COURSE.find
        return faq
    } catch (error) {
        
    }
}
