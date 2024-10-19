import { ColumnDef } from "@tanstack/react-table";
import { WasteRevenue } from "@/lib/validation";

// Waste Revenue Columns Definition
export const wasteRevenueColumns: ColumnDef<WasteRevenue>[] = [
  {
    accessorKey: "vin",
    header: "VIN",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "totalBinsCollected",
    header: "Total Bins Collected",
  },
  {
    accessorKey: "wasteCollectionType",
    header: "Waste Collection Type",
  },
  {
    accessorKey: "revenuePerBin",
    header: "Revenue per Bin",
    cell: (info) => `${info.getValue()} GHS`, // Displaying currency suffix
  },
  {
    accessorKey: "totalRevenue",
    header: "Total Revenue (GHS)",
    cell: (info) => `${info.getValue()} GHS`, // Displaying currency suffix
  },
  {
    accessorKey: "driverName",
    header: "Driver Name",
  },
  {
    accessorKey: "collectionType",
    header: "Collection Type",
  },
];
