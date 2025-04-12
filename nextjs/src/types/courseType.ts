// Define types for the Lecture object
export interface Lecture {
  _id: string;
  lectureName: string;
}

// Define types for the Section object, which contains an array of Lectures
export interface SectionType {
  _id: string;
  sectionTitle: string;
  courseId: string;
  lectures: Lecture[];
}

// Define types for the FAQ object
interface FAQ {
  _id: string;
  question: string;
  answer: string;
  __v: number;
}

// Define the main Course type, which includes an array of Sections, FAQs, and other course-related details
export interface CourseType {
  _id: string;
  courseName: string;
  courseTitle: string;
  lectureSection: SectionType[];
  courseDescription: string;
  coursePrice: string;
  courseThumbnail: string;
  __v: number;
  IntroVideo: string;
  FAQ: FAQ[];
}
export interface CourseTypeWithoutPopulate{
  _id: string;
  courseName: string;
  courseTitle: string;
  lectureSection: string[];
  courseDescription: string;
  coursePrice: string;
  courseThumbnail: string;
  __v: number;
  IntroVideo: string;
  FAQ: FAQ[];
}
