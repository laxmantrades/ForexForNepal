import { User } from "../models/user.model";

export const createUser = async (userData: {
  email: string;
  fullName: string;
  photoUrl: string;

  googleId: string;
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
    throw new Error("Error creatig createUser")
  }
};

export const findUserService = async (userId: string) => {
  try {
    let user = await User.findById(userId);

    return user;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
