export interface lectureType {
  lectureName: string;
  videoUrl: string;
  _id: string;
}

export interface lectureTypeForAdmin {
  createdAt: string;
  isPreviewFree: boolean;
  lectureName: string;
  updatedAt:string;
  videoUrl: string;
  __v: number;
  _id: string;
}
