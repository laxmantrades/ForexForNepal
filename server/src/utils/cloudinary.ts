import cloudinary from "../config/cloudinary.config";

export const uploadImageOnCloudinary = async (file: Express.Multer.File) => {
  const base64Image = Buffer.from(file.buffer).toString("base64");
  const dataURI = `data:${file.mimetype};base64,${base64Image}`;
  const uploadResponse = await cloudinary.uploader.upload(dataURI);
  return uploadResponse.secure_url;
};

export const deleteMediaFromCloudinary = async (OutLookPhotoUrl: String) => {
  try {
    const match = OutLookPhotoUrl.match(/\/v\d+\/(.+?)\./);

    const publicId = match ? match[1] : null;
    await cloudinary.uploader.destroy(publicId as string);
  } catch (error) {
    console.log(error);
  }
};
