import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/admin-panel/data-table-column-header"


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
        enableSorting: true,
        enableHiding: true,
      },
    {
      accessorKey: 'insuranceID',
      header: 'Insurance ID',
    },
    {
      accessorKey: 'vin',
      header: 'Vin',
    },
    {
      accessorKey: 'incidentDate',
      header: 'Incident Date',
    },
    {
      accessorKey: 'claimAmount',
      header: 'Claim Amount (GHS)',
      cell: (info: any) => `GHS ${info.getValue()}`,
    },
    {
      accessorKey: 'claimStatus',
      header: 'Claim Status',
    },
    {
      accessorKey: 'claimDate',
      header: 'Claim Date',
    },
    {
      accessorKey: 'insuranceProvider',
      header: 'Insurance Provider',
    },
    {
      accessorKey: 'driverInvolved',
      header: 'Driver Involved',
    },
    {
      accessorKey: 'incidentDescription',
      header: 'Incident Description',
    },
    {
      accessorKey: 'claimResolutionDate',
      header: 'Claim Resolution Date',
    },
    {
      accessorKey: 'resolutionNotes',
      header: 'Resolution Notes',
    },
  ];
  