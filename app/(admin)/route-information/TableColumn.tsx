"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/admin-panel/data-table-column-header";
import { DataTableRowActions } from "../vehicles/data-table-components/data-table-row-actions";
import { useState, useRef, useEffect } from "react";

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
    accessorKey: "routeId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Route ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("routeId")}</div>
    ),
  },
  {
    accessorKey: "vin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="VIN" />
    ),
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("vin")}</div>,
  },
  {
    accessorKey: "startLocation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Location" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">{row.getValue("startLocation")}</div>
    ),
  },
  {
    accessorKey: "endLocation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Location" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">{row.getValue("endLocation")}</div>
    ),
  },
  {
    accessorKey: "distance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Distance (km)" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("distance")}</div>
    ),
  },
  {
    accessorKey: "startTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Time" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">
        {new Date(row.getValue("startTime")).toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: "endTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Time" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">
        {new Date(row.getValue("endTime")).toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: "stopsMade",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stops Made" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("stopsMade")}</div>
    ),
  },
  {
    accessorKey: "routeStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Route Status" />
    ),
    cell: ({ row }) => (
      <div
        className={`w-fit px-4 py-1 rounded-sm ${
          row.getValue("routeStatus") === "Completed"
            ? "bg-green-200 text-green-500"
            : row.getValue("routeStatus") === "In Progress"
            ? "bg-yellow-200 text-yellow-500"
            : row.getValue("routeStatus") === "Pending"
            ? "bg-blue-200 text-blue-500"
            : "bg-red-200 text-red-500"
        } capitalize`}
      >
        {row.getValue("routeStatus")}
      </div>
    ),
  },
  {
    accessorKey: "driverId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Driver ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("driverId")}</div>
    ),
  },
  {
    accessorKey: "fuelConsumption",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Fuel Consumption (Litres)"
      />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">{row.getValue("fuelConsumption")}</div>
    ),
  },
  {
    accessorKey: "notes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Notes/Remarks" />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue("notes") || "-"}</div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
