import { User } from "../models/user.model";

export const createUser = async (userData: {
  email: string;
  fullName: string;
  photoUrl: string;
  lastLogin: string;
  refreshToken: string;
}) => {
  try {
    const { email } = userData;

    let newUser = await User.findOne({ email });
    if (!newUser) {
      newUser = await User.create(userData);
      return newUser;
    }
    return newUser;
  } catch (error) {
    console.log(error);
  }
};
