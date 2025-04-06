"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { FC, useEffect } from "react";
import { useDeleteOutLookMutation } from "@/redux/api/outlookApi";
import { toast } from "sonner";
interface Props {
  id: string;
}
const DeleteAlert: FC<Props> = ({ id }) => {
  const [deleteOutLook, { data, isError, isSuccess }] = useDeleteOutLookMutation();
  const deletHandler = () => {
     deleteOutLook(id)
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully deleted outlook!");
    }
    if (isError) {
      toast.error("Failed to Delete OutLook");
    }
  }, [isError, isSuccess]);

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">Delete</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            outlook and remove your data from database also!.
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-1.5 justify-end">
          <DialogClose className="flex space-x-2 text-white">
            {" "}
            <h1 onClick={deletHandler} className="bg-red-500  px-2 border rounded  cursor-pointer">Yes</h1>
            <h1 className="bg-red-500  px-2 border rounded cursor-pointer">No</h1>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteAlert;
