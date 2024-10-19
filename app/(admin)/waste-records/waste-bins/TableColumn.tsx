import { ColumnDef } from "@tanstack/react-table";
import { WasteBinsCollected } from "@/lib/validation";

export const wasteBinsCollectedColumns: ColumnDef<WasteBinsCollected>[] = [
  {
    accessorKey: "vin",
    header: "Vin",
  },
  {
    accessorKey: "route",
    header: "Route",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "wasteBinsCollected",
    header: "Waste Bins Collected",
  },
  {
    accessorKey: "tripDuration",
    header: "Trip Duration (hours)",
  },
  {
    accessorKey: "driverName",
    header: "Driver Name",
  },
  {
    accessorKey: "fuelConsumed",
    header: "Fuel Consumed (Liters)",
    cell: (info) => `${info.getValue()} Liters`, // Displaying "Liters" suffix
  },
  {
    accessorKey: "notesRemarks",
    header: "Notes/Remarks",
  },
];
