"use client";
import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { wasteBinsCollectedColumns } from "./TableColumn";
import SearchTable from "@/components/admin-panel/SearchTable";
import { DeleteVehicleDialog } from "@/components/delete-vehicle-dialog";
import { DataTableViewOptions } from "@/components/admin-panel/data-table-view-options";
import { DataTable } from "@/components/admin-panel/DataTable";
import { wasteBinsCollectedData } from "./wasteBinsMockData";
import WasteBinsDataEntryForm from "./WasteBinsDataEntryForm";

export default function WasteBinsPage() {
  const [tableData, setTableData] = useState(wasteBinsCollectedData);
  const table = useReactTable({
    data: tableData,
    columns: wasteBinsCollectedColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <ContentLayout title="Waste Bins">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/transportation-cost">Transportation Cost</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink asChild>
              <Link href="/waste-records">Waste Records</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Waste Bins</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* page content*/}
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
            <WasteBinsDataEntryForm />
            <DataTableViewOptions table={table} />
          </div>
        </div>
        <DataTable columns={wasteBinsCollectedColumns} table={table} />
      </div>
    </ContentLayout>
  );
}
