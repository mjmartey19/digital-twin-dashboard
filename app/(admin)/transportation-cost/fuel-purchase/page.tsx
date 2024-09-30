"use client"
import { useState } from "react";
import Link from "next/link";
import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {fuelPurchaseMockData} from "./mockData"
import {columns} from "./TableColums"
import { DataTable } from "../../../../components/admin-panel/DataTable"
import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import SearchTable from "../../../../components/admin-panel/SearchTable";
import { DeleteVehicleDialog } from "@/components/delete-vehicle-dialog";

export default function FuelPurchasePage() {
  const [tableData, setTableData] = useState(fuelPurchaseMockData)
  
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <ContentLayout title="Fuel Purchase">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/transportation-cost">Transportational Cost</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Fuel Purchase</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* <PlaceholderContent /> */}

      {/* Add your page content here */}
      <div className="w-full mt-4 flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <SearchTable
            table={table}
            searchBy={"driverName"}
            placeholder={"search by driver's Name"}
          />
          {table.getFilteredSelectedRowModel().rows.length > 0 ? (
            <DeleteVehicleDialog
              vehicles={table
                .getFilteredSelectedRowModel()
                .rows.map((row) => row.original as any)}
              onSuccess={() => table.toggleAllRowsSelected(false)}
            />
          ) : null}
        </div>
        <DataTable columns={columns} table={table} />
      </div>
    </ContentLayout>
  );
}
