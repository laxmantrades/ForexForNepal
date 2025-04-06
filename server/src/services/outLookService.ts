import { OUTLOOKSchema } from "../models/outLookModel";
import { deleteMediaFromCloudinary } from "../utils/cloudinary";

export const createOutLookService = async (
  Pair: String,
  Description: String,
  OutLookPhotoUrl: String | undefined,
  Time: String
) => {
  const outlook = await OUTLOOKSchema.create({
    Pair,
    Description,
    OutLookPhotoUrl,
    Time,
  });
  return outlook;
};

export const findOutLookByMinService = async (TimeFrame: String) => {
  const outLook = await OUTLOOKSchema.find({ Time: TimeFrame });
  return outLook;
};
export const deleteOutLookService = async (id: string) => {

  //todo extract publicId and deletefrom Cloudinary
  const outLook = await OUTLOOKSchema.findById(id);
  if (!outLook) {
    throw new Error("OutLook Not Found");
  }
  await deleteMediaFromCloudinary(outLook?.OutLookPhotoUrl);
  const deleteOutLook = OUTLOOKSchema.findByIdAndDelete(id);

  return deleteOutLook;
};
