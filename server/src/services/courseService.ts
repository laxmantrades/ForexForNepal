import { COURSE } from "../models/course.model";

export const createCourse = async (UserData: {
  courseName: string;
  courseTitle: string;
  courseDescription: string;
  coursePrice: string;
  courseThumbnail: any;
}) => {
  try {
    const user = await COURSE.create(UserData);

    return user;
  } catch (error) {
  throw new Error("Error creating createCourse")
  }
};
export const findCourseAndUpdate = async (id: string, updatedData: any) => {
  try {
    const course = await COURSE.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    return course;
  } catch (error) {
    throw new Error("Error creating findCourseAndUpdate")
  }
};
export const findCourse = async (id: string) => {
  try {
    const course = await COURSE.findById(id)
      .select("-createdAt -updatedAt -enrolledStudents")
      .populate([{
       
        path: "lectureSection",
        select:"-createdAt -updatedAt -__v",

        populate: {
          path: "lectures",
          /// match: { isPreviewFree: true }
          select: "lectureName",
        },
      },
      {
        path: "FAQ", // Populate FAQ along with lectureSection
      },
    ])
      
      .lean();

    return course;
  } catch (error) {
    throw new Error("Error invloking findCourse")
  }
};

//!this is used in courseservice
export const findCourseServiceForCoursePurchase = async (id: string) => {
  try {
    const course = await COURSE.findById(id);

    return course;
  } catch (error) {
    throw new Error("Error finding findCourseSerciceForCoursePurchase")
  }
};
export const findALLCourse = async () => {
  try {
    const course = await COURSE.find().select(
      "-createdAt -updatedAt -enrolledStudents -lectureSection -FAQ -introVideo -coursePrice -courseDescription -__v -IntroVideo"
    );
    return course;
  } catch (error) {
    throw new Error("Error finding findAllCourse")
  }
};

export const findCourseBYIDservice = async (id: string) => {
  try {
    const course = await COURSE.findById(id);
    return course;
  } catch (error) {
    throw new Error("Error creating findCourseByIdService")
  }
};
