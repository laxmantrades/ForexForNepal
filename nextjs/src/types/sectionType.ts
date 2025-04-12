import { lectureType } from "./lectureType";

export interface Section {
  _id:string
  courseId: string;
  lectures: lectureType[];
  sectionTitle: string;
  
}
