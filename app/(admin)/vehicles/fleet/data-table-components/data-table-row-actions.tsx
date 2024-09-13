import { useState } from "react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EditVehicleDialog } from "@/components/edit-vehicle-dialog";


interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  // State to track if the dialog is open
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle Edit button click
  const handleEdit = () => {
    setIsDialogOpen(true);
  };

  const handleCopy = () => {
    console.log("Make a copy", row.original);
  };

  const handleFavorite = () => {
    console.log("Favorite", row.original);
  };

  const handleDelete = () => {
    console.log("Delete", row.original);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsVerticalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={handleCopy}>Make a copy</DropdownMenuItem>
          <DropdownMenuItem onClick={handleFavorite}>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Render the EditVehicleDialog and pass the row data */}
      <EditVehicleDialog
        vehicle={row.original}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
