"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "../../../../components/admin-panel/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
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
      <div className="w-[120px] capitalize">
        {row.getValue("typeOfVehicle")}
      </div>
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
    cell: ({ row }) => {
      const driver = row.getValue("assignedDriver") as {
        name: string;
        image: string;
      };

      return (
        <div className="flex items-center space-x-2 w-[150px]">
          <Image
            src={driver.image}
            alt={driver.name}
            width={24}
            height={24}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span>{driver.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "assignedJanitors",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assigned Janitors" />
    ),
    cell: ({ row }) => {
      const janitors = row.getValue("assignedJanitors") as {
        name: string;
        image: string;
      }[];

      const [isOpen, setIsOpen] = useState(false);
      const dropdownRef = useRef<HTMLDivElement>(null);

      // Close dropdown when clicking outside
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

      return (
        <div className="relative w-full" ref={dropdownRef}>
          <button
            className="flex items-center justify-between w-full p-2 bg-gray-100 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{janitors.length} {janitors.length === 1 ? "janitor" : "janitors"} </span>
            {isOpen ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
          {isOpen && (
            <div className="absolute z-10 w-full bg-white shadow-lg rounded-md mt-2">
              <div className="p-2 space-y-1">
                {janitors.map((janitor, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 px-2 py-1 text-black rounded-md bg-gray-100 hover:bg-gray-200"
                  >
                    <Image
                      src={janitor.image}
                      alt={janitor.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>{janitor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
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
