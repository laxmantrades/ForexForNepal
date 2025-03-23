import { StringDecoder } from "string_decoder";
import { COURSEPURCHASE } from "../models/coursePurchase.model";

export const createCoursePurchaseService = async (courseId:string, userId:string, amount:string) => {
  try {
    const coursePurchase = await COURSEPURCHASE.create({
      courseId,
      userId,
      amount,
    });
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
