import { licenseCostSchema } from "@/lib/validation";
import { z } from "zod"
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

type LicenseCost = z.infer<typeof licenseCostSchema>;

export const licenseCostColumns: ColumnDef<LicenseCost>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-0.5"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-0.5"
          />
        ),
        enableSorting: true,
        enableHiding: true,
    },
  {
    accessorKey: "vin",
    header: "VIN",
  },
  {
    accessorKey: "licenseType",
    header: "License Type",
  },
  {
    accessorKey: "licenseNumber",
    header: "License Number",
  },
  {
    accessorKey: "issuingAuthority",
    header: "Issuing Authority",
  },
  {
    accessorKey: "licenseIssueDate",
    header: "License Issue Date",
  },
  {
    accessorKey: "licenseExpiryDate",
    header: "License Expiry Date",
  },
  {
    accessorKey: "licenseCost",
    header: "License Cost (GHS)",
    cell: (info) => `GHS ${info.getValue()}`, 
  },
  {
    accessorKey: "renewalCost",
    header: "Renewal Cost (GHS)",
    cell: (info) => `GHS ${info.getValue()}`,
  },
  {
    accessorKey: "paymentDate",
    header: "Payment Date",
  },
  {
    accessorKey: "paymentMode",
    header: "Payment Mode",
  },
  {
    accessorKey: "finesPenalties",
    header: "Fines/Penalties (GHS)",
    cell: (info) => `GHS ${info.getValue()}`,
  },
  {
    accessorKey: "licensingLocation",
    header: "Licensing Location",
  },
  {
    accessorKey: "notesRemarks",
    header: "Notes/Remarks",
  },
];


