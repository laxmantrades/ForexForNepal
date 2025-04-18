import { LECTURE } from "../models/lecture.model";
import { SECTION } from "../models/section.model";

interface lectureData {
  lectureName: string;
  videoUrl: string;
  isPreviewFree: Boolean;
}

export const createLectureService = async (
  lectureData: lectureData,
  sectionId: string
) => {
  try {
    const lecture = await LECTURE.create(lectureData);
    const section = await SECTION.findByIdAndUpdate(
      sectionId,
      { $push: { lectures: lecture._id } },
      { new: true }
    );
    return lecture;
  } catch (error) {
    throw new Error("Error creating createLectureService")
  }
};
export const getLectureService = async (lectureId: string) => {
  try {
    const lecture = await LECTURE.findById(lectureId);
    return lecture;
  } catch (error) {
    throw new Error("Error creating getLectureService")
  }
};

export const updateLectureService = async (
  lectureData: lectureData,
  lectureId: string
) => {
  try {
    const lecture = await LECTURE.findByIdAndUpdate(lectureId, lectureData, {
      new: true,
    });
    return lecture;
  } catch (error) {
    throw new Error("Error updating updateLectureService")
  }
};

export const deleteLectureService = async (
  lectureId: string,
  sectionId: string
) => {
  try {
    const lecture = LECTURE.findByIdAndDelete(lectureId);
    const section = await SECTION.findByIdAndUpdate(sectionId, {
      $pull: { lectures: lectureId },
    });

    return lecture;
  } catch (error) {
    throw new Error("Error deleting deleteLectureService")
  }
};
