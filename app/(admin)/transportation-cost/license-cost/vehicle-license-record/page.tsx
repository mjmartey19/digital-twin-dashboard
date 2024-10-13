"use client"
import Link from "next/link";
import { useState } from "react"
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
import SearchTable from "@/components/admin-panel/SearchTable";
import { DeleteVehicleDialog } from "@/components/delete-vehicle-dialog";
import { DataTableViewOptions } from "@/components/admin-panel/data-table-view-options";
import { DataTable } from "@/components/admin-panel/DataTable";
import { licenseCostColumns } from "./TableColumn"
import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import {licenseCostData} from "./mockData";
import VehicleLicenseRecordEntryForm from "./VehicleLicenseRecordEntryForm";

export default function VehicleLicenseCostPage() {

  const [tableData, setTableData] = useState()
  const table = useReactTable({
    data: licenseCostData,
    columns: licenseCostColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <ContentLayout title="Vehicle License Cost">
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
              <Link href="/transportation-cost">Transportation Cost</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/license-cost">License Cost</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Vehicle License Cost</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* <page content*/}
      <div className="w-full h-full mt-4 flex flex-col gap-3">
        <div className="w-full flex justify-between">
            <SearchTable
              table={table}
              searchBy={"vin"}
              placeholder={"vehicle identification number"}
            />

            <div className="flex place-items-center gap-4">
              {table.getFilteredSelectedRowModel().rows.length > 0 ? (
                <DeleteVehicleDialog
                  vehicles={table
                    .getFilteredSelectedRowModel()
                    .rows.map((row) => row.original as any)}
                  onSuccess={() => table.toggleAllRowsSelected(false)}
                />
              ) : null}
              <VehicleLicenseRecordEntryForm/>
              <DataTableViewOptions table={table} />
            </div>
        </div>
        <DataTable columns={licenseCostColumns} table={table} />
      </div>
    </ContentLayout>
  );
}
