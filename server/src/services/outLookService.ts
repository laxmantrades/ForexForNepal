import { OUTLOOKSchema } from "../models/outLookModel";

export const createOutLookService = async (
  Pair: String,
  Description: String,
  OutLookPhotoUrl: String|undefined,
  Time:String
) => {
  const outlook = await OUTLOOKSchema.create({ Pair, Description, OutLookPhotoUrl,Time });
  return outlook;
};
