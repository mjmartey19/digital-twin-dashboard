import { ColumnDef } from "@tanstack/react-table";
import { WasteDumpingFee } from "@/lib/validation";

export const wasteDumpingFeeColumns: ColumnDef<WasteDumpingFee>[] = [
  {
    accessorKey: "vin",
    header: "VIN",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "wasteDumped",
    header: "Waste Dumped (kg)",
    cell: (info) => `${info.getValue()} kg`, // Displaying "kg" suffix
  },
  {
    accessorKey: "dumpingFacility",
    header: "Dumping Facility",
  },
  {
    accessorKey: "dumpingFeePerKg",
    header: "Dumping Fee per kg (GHS)",
    cell: (info) => `${info.getValue()} GHS`, // Displaying "GHS" suffix
  },
  {
    accessorKey: "totalCost",
    header: "Total Cost (GHS)",
    cell: (info) => `${info.getValue()} GHS`, // Displaying "GHS" suffix
  },
  {
    accessorKey: "notesRemarks",
    header: "Notes/Remarks",
  },
];
