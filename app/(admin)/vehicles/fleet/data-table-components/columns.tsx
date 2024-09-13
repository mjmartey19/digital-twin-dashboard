"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
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
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("vin")}</div>,
  },
  {
    accessorKey: "vehicleNumberPlate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number Plate" />
    ),
    cell: ({ row }) => (
      <div className="w-[120px]">{row.getValue("vehicleNumberPlate")}</div>
    ),
  },
  {
    accessorKey: "make",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Make" />
    ),
    cell: ({ row }) => <div className="w-[120px]">{row.getValue("make")}</div>,
  },
  {
    accessorKey: "model",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model" />
    ),
    cell: ({ row }) => <div className="w-[120px]">{row.getValue("model")}</div>,
  },
  {
    accessorKey: "yearOfManufacture",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("yearOfManufacture")}</div>
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
    accessorKey: "typeOfVehicle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vehicle Type" />
    ),
    cell: ({ row }) => (
      <div className="w-[120px] capitalize">{row.getValue("typeOfVehicle")}</div>
    ),
  },
  {
    accessorKey: "vehicleStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div
        className={`w-fit px-4 py-1 rounded-sm ${row.getValue("vehicleStatus") === "En Route"
          ? "bg-green-200 text-green-500"
          : row.getValue("vehicleStatus") === "Available"
            ? "bg-blue-200 text-blue-500"
            : row.getValue("vehicleStatus") === "Out of Service"
              ? "bg-red-200 text-red-500"
              : "bg-yellow-200 text-yellow-500"

          } capitalize`}
      >
        {row.getValue("vehicleStatus")}
      </div>
    ),
  },
  {
    accessorKey: "assignedDriver",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assigned Driver" />
    ),
    cell: ({ row }) => <div className="w-[150px]">{row.getValue("assignedDriver")}</div>,
  },
  {
    accessorKey: "assignedJanitors",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assigned Janitors" />
    ),
    cell: ({ row }) => {
      const janitors = row.getValue("assignedJanitors") as string[];
      return (
        <div className="w-fit space-y-1 flex gap-1 flex-wrap">
          {janitors.map((janitor: string, index: number) => (
            <div
              key={index}
              className="px-2 py-1 text-gray-800 rounded-md border border-dotted border-dark-500"
            >
              {janitor}
            </div>
          ))}
        </div>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
