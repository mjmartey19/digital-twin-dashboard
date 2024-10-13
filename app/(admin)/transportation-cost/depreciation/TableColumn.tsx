import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export const columns : ColumnDef<any>[] = [
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
      accessorKey: 'vin',
      header: 'Vin',
    },
    {
      accessorKey: 'purchaseDate',
      header: 'Purchase Date',
    },
    {
      accessorKey: 'purchasePrice',
      header: 'Purchase Price (GHS)',
      cell: (info: any) => `GHS ${info.getValue()}`,
    },
    {
      accessorKey: 'depreciationMethod',
      header: 'Depreciation Method',
    },
    {
      accessorKey: 'usefulLifeYears',
      header: 'Useful Life (Years)',
    },
    {
      accessorKey: 'salvageValue',
      header: 'Salvage Value (GHS)',
      cell: (info: any) => `GHS ${info.getValue()}`,
    },
    {
      accessorKey: 'depreciationRate',
      header: 'Depreciation Rate (%)',
      cell: (info: any) => `${info.getValue()}%`,
    },
    {
      accessorKey: 'accumulatedDepreciation',
      header: 'Accumulated Depreciation (GHS)',
      cell: (info : any) => `GHS ${info.getValue()}`,
    },
    {
      accessorKey: 'currentBookValue',
      header: 'Current Book Value (GHS)',
      cell: (info : any) => `GHS ${info.getValue()}`,
    },
    {
      accessorKey: 'depreciationPeriod',
      header: 'Depreciation Period',
    },
    {
      accessorKey: 'depreciationExpense',
      header: 'Depreciation Expense (GHS)',
      cell: (info : any) => `GHS ${info.getValue()}`,
    },
    {
      accessorKey: 'notesRemarks',
      header: 'Notes/Remarks',
    },
  ];
  