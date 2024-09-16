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
import { DeleteVehicleDialog } from "@/components/delete-vehicle-dialog";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleEdit = () => {
    setIsEditDialogOpen(true);
  };

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
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
        <DropdownMenuContent align="start" className="w-[200px] max-h-[400px] overflow-y-auto">
          <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleMaintenance}>Maintenance</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleFuelPurchase}>Fuel Purchase</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleFuelConsumed}>Fuel Consumed</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDepreciation}>Depreciation</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleInsuranceRecord}>Insurance Record</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleInsuranceClaim}>Insurance Claim</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLicensingCost}>Licensing Cost</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleWasteBinsCollected}>Waste Bins Collected</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleWasteDumpingFee}>Waste Dumping Fee</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleWasteRevenue}>Waste Revenue</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleRouteInformation}>Route Information</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Render the EditVehicleDialog and pass the row data */}
      <EditVehicleDialog
        vehicle={row.original}
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
      />

      {/* Render the DeleteVehicleDialog */}
      <DeleteVehicleDialog
        vehicles={[row.original]} // Pass the selected vehicle
        open={isDeleteDialogOpen}
        showTrigger={false}
        onOpenChange={setIsDeleteDialogOpen}

      />
    </>
  );
}
