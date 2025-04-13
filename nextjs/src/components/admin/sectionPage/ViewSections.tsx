"use client";


import { Button } from "../../ui/button";
import AdminShowLecture from "./AdminShowLetures";

const ViewSections = () => {
  return (
    <div className="mx-4">
      <div className="flex justify-between text-xl mb-2">
        <h1>Sections</h1>
        <Button>View Lectures</Button>
      </div>

      <AdminShowLecture />
    </div>
  );
};
export default ViewSections;
