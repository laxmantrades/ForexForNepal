import { RequestHandler } from "express";
import { createFaqService } from "../services/faqService";
import { findCourseBYIDservice } from "../services/courseService";


export const createFaq:RequestHandler=async(req,res)=>{
    try {
        const {answer,question,courseId}=req.body

        const faq:null | any=await createFaqService(question,answer)
       const course=await findCourseBYIDservice(courseId)
       if(!course){
        res.status(404).json({
            message:"Course not Found",
            success:false
        })
       }
       course?.FAQ.push(faq?._id)
       await course?.save()
     
        res.status(200).json({
            message:"Successfyll created FAQ",
            success:true
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            success:false
        })
    }
}

export const updateFaq:RequestHandler=async(req,res)=>{
    try {
        const {answer,question}=req.body
        res.status(200).json({
            message:"Successfyll created FAQ",
            success:true
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            success:false
        })
    }
}

export const getFaq:RequestHandler=async(req,res)=>{
    try {
        const {answer,question}=req.body
        res.status(200).json({
            message:"Successfyll created FAQ",
            success:true
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            success:false
        })
    }
}