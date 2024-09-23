"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ReloadIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { TrashIcon } from "lucide-react";
import { useTransition, useState } from "react";
import { toast } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css'; // Import CSS for React Toaster

interface DeleteVehiclesDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  vehicles: Row<any>["original"][];
  showTrigger?: boolean;
  onSuccess?: () => void;
}

export function DeleteVehicleDialog({
  vehicles,
  showTrigger = true,
  onSuccess,
  ...props
}: DeleteVehiclesDialogProps) {
  const [isDeletePending, startDeleteTransition] = useTransition();
  const [isDeleting, setIsDeleting] = useState(false);

  // Mock deletion function - replace with actual API call
  const deleteVehicles = async () => {
    try {
      // Simulate an API call for vehicle deletion
      setIsDeleting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

      toast.success("Vehicle(s) deleted successfully.");
      if (onSuccess) onSuccess(); // Trigger success callback

    } catch (error) {
      toast.error("Failed to delete vehicle(s). Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteVehicle = async () => {
    startDeleteTransition(async () => {
      await deleteVehicles();
    });
  };

  return (
    <Dialog {...props}>
      {showTrigger && (
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
            <TrashIcon className="mr-2 h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:flex">Delete</span> ({vehicles.length})
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            You are about to permanently delete{" "}
            {vehicles.length === 1
              ? "this vehicle record"
              : `these ${vehicles.length} vehicle records`}.
            This action cannot be undone, and all associated data will be lost.
            Please review the details carefully before proceeding.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDeleteVehicle}
            disabled={isDeleting || isDeletePending}
          >
            {isDeletePending || isDeleting ? (
              <ReloadIcon
                className="h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              "Delete"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
