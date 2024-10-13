'use client'
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
import { useState } from "react";
import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from './TableColumn'
import { mockData } from "./mockData";
import SearchTable from "@/components/admin-panel/SearchTable";
import { DataTableViewOptions } from "@/components/admin-panel/data-table-view-options";
import { DataTable } from "@/components/admin-panel/DataTable";
import { DeleteVehicleDialog } from "@/components/delete-vehicle-dialog";
import InsuranceEntryForm from "./InsuranceEntryForm";


export default function InsuranceRecordPage() {

  const [tableData, setTableData] = useState(mockData)
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <ContentLayout title="Insurance Record">
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
              <Link href="/insurance-costs">Insurance Cost</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Insurance Record</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* page content */}
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
              <InsuranceEntryForm/>
              <DataTableViewOptions table={table} />
            </div>
        </div>
        <DataTable columns={columns} table={table} />
      </div>

    </ContentLayout>
  );
}
