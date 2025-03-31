import express from "express"
import { createFaq } from "../controllers/faq.controller"

const faqRouter=express.Router()
faqRouter.route("/").post(createFaq)
faqRouter.route("/").get()
faqRouter.route("/").patch()


// todo faqRouter.route("/").delete()

export default faqRouter