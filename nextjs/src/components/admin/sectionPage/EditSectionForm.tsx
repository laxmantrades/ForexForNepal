import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const EditSectionForm = ({
  sectionTitle,
  setSectionTitle,
  isLoading,
  submitHandler,
  sectionId,
  sectionPurpose,
}) => {
  console.log(sectionId);

  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex">
          <h1 className="flex bg-black text-white text-center text-sm p-2 rounded ">
            <Pencil className=" text-black bg-white mr-2 rounded" />
            {sectionPurpose}
          </h1>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">{sectionPurpose}</DialogTitle>
          </DialogHeader>
          <h1 className=" font-bold text-black text-xl ">SectionName </h1>
          <div className="text-center">
            <Input
              value={sectionTitle}
              className="text-black mb-5"
              onChange={(e) => setSectionTitle(e.target.value)}
              placeholder="Update Section Name"
            />
            <DialogClose onClick={() => submitHandler(sectionId)} asChild>
              <span className="px-5 p-2 mt-5 cursor-pointer text-center bg-black text-white rounded text-xl">
                Submit
              </span>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default EditSectionForm;
