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

  const handleDelete = () => {
    console.log("Delete", row.original);
  };

  const handleMaintenance = () => {
    console.log("Maintenance", row.original);
  };

  const handleFuelPurchase = () => {
    console.log("Fuel Purchase", row.original);
  };

  const handleFuelConsumed = () => {
    console.log("Fuel Consumed", row.original);
  };

  const handleDepreciation = () => {
    console.log("Depreciation", row.original);
  };

  const handleInsuranceRecord = () => {
    console.log("Insurance Record", row.original);
  };

  const handleInsuranceClaim = () => {
    console.log("Insurance Claim", row.original);
  };

  const handleLicensingCost = () => {
    console.log("Licensing Cost", row.original);
  };

  const handleWasteBinsCollected = () => {
    console.log("Waste Bins Collected", row.original);
  };

  const handleWasteDumpingFee = () => {
    console.log("Waste Dumping Fee", row.original);
  };

  const handleWasteRevenue = () => {
    console.log("Waste Revenue", row.original);
  };

  const handleRouteInformation = () => {
    console.log("Route Information", row.original);
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
          <DropdownMenuItem onClick={handleMaintenance}>Maintenance</DropdownMenuItem>
          <DropdownMenuItem onClick={handleFuelPurchase}>Fuel Purchase</DropdownMenuItem>
          <DropdownMenuItem onClick={handleFuelConsumed}>Fuel Consumed</DropdownMenuItem>
          <DropdownMenuItem onClick={handleDepreciation}>Depreciation</DropdownMenuItem>
          <DropdownMenuItem onClick={handleInsuranceRecord}>Insurance Record</DropdownMenuItem>
          <DropdownMenuItem onClick={handleInsuranceClaim}>Insurance Claim</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLicensingCost}>Licensing Cost</DropdownMenuItem>
          <DropdownMenuItem onClick={handleWasteBinsCollected}>Waste Bins Collected</DropdownMenuItem>
          <DropdownMenuItem onClick={handleWasteDumpingFee}>Waste Dumping Fee</DropdownMenuItem>
          <DropdownMenuItem onClick={handleWasteRevenue}>Waste Revenue</DropdownMenuItem>
          <DropdownMenuItem onClick={handleRouteInformation}>Route Information</DropdownMenuItem>
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
