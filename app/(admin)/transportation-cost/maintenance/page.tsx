"use client"
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
import { maintenanceRecords } from "./mockData";
import { useState } from "react";
import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./TableColumn"
import SearchTable from "@/components/admin-panel/SearchTable";
import { DeleteVehicleDialog } from "@/components/delete-vehicle-dialog";
import { DataTableViewOptions } from "@/components/admin-panel/data-table-view-options";
import { DataTable } from "@/components/admin-panel/DataTable";
import MaintenanceDataEntry from "./MaintenanceDataEntry";
export default function FleetPage() {

  const [tableData, setTableData] = useState(maintenanceRecords)
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <ContentLayout title="Maintenance">
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
            <BreadcrumbPage>Maintenance</BreadcrumbPage>
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
              <MaintenanceDataEntry/>
              <DataTableViewOptions table={table} />
            </div>
        </div>
        <DataTable columns={columns} table={table} />
      </div>
    </ContentLayout>
  );
}
