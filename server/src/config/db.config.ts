import mongoose from "mongoose";

const connectDatabae = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI!);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
export default connectDatabae;
