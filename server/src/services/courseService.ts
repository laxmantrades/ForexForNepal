import { COURSE } from "../models/course.model";

export const createCourse = async (UserData: {
  courseName: string;
  courseTitle: string;
  courseDescription: string;
  coursePrice: string;
  courseThumbnail: string;
}) => {
  try {
    const user = await COURSE.create(UserData);

    return user;
  } catch (error) {
    console.log(error);
  }
};
export const findCourseAndUpdate = async (id: string, updatedData: any) => {
  try {
    const course = await COURSE.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    return course;
  } catch (error) {
    //console.log(error);
  }
};
export const findCourse = async (id: string) => {
  try {
    const course = await COURSE.findById(id)
      .select("-createdAt -updatedAt -enrolledStudents")
      .populate({
        path: "lectureSection",

        populate: {
          path: "lectures",
          /// match: { isPreviewFree: true }
          select: "lectureName",
        },
      })
      .lean();

    return course;
  } catch (error) {
    console.log(error);
  }
};
export const findALLCourse = async () => {
  try {
    const course = await COURSE.find();
    return course;
  } catch (error) {
    console.log(error);
  }
};
