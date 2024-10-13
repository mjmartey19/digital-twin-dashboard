import { driverLicenseSchema } from "@/lib/validation";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/admin-panel/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";

export type DriverLicense = z.infer<typeof driverLicenseSchema>;

export const driverLicenseColumns: ColumnDef<DriverLicense>[] = [
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
    accessorKey: "driverID",
    header: "Driver ID",
  },
  {
    accessorKey: "driverName",
    header: "Driver Name",
  },
  {
    accessorKey: "licenseNumber",
    header: "License Number",
  },
  {
    accessorKey: "licenseType",
    header: "License Type",
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
    accessorKey: "renewalDate",
    header: "Renewal Date",
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
    accessorKey: "licenseStatus",
    header: "License Status",
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
