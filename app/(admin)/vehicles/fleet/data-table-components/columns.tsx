"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<any>[] = [
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
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "vin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="VIN" />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue("vin")}</div>
    ),
  },
  {
    accessorKey: "plateNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Plate Number" />
    ),
    cell: ({ row }) => (
      <div className="w-[120px]">{row.getValue("plateNumber")}</div>
    ),
  },
  {
    accessorKey: "vehicleType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vehicle Type" />
    ),
    cell: ({ row }) => (
      <div className="w-[120px] capitalize">{row.getValue("vehicleType")}</div>
    ),
  },
  {
    accessorKey: "fuelType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fuel Type" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px] capitalize">{row.getValue("fuelType")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div
        className={`w-[120px] ${row.getValue("status") === "Active"
          ? "text-green-600"
          : row.getValue("status") === "Inactive"
            ? "text-red-600"
            : "text-yellow-600"
          } capitalize`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "assignedPersonnel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assigned Personnel" />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue("assignedPersonnel")}</div>
    ),
  },
];
