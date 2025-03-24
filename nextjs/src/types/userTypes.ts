export interface User {
  _id: string;
  email: string;
  fullName: string;
  refreshToken: string;
  photoUrl: string;
  lastLogin: string;
  role: string;
  coursePurhcased: string[];
}
