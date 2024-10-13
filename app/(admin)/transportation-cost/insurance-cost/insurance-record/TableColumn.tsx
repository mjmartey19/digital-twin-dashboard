import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

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
      accessorKey: 'vin',
      header: 'Vin',
    },
    {
      accessorKey: 'insuranceProvider',
      header: 'Insurance Provider',
    },
    {
      accessorKey: 'policyNumber',
      header: 'Policy Number',
    },
    {
      accessorKey: 'insuranceType',
      header: 'Insurance Type',
    },
    {
      accessorKey: 'coverageStartDate',
      header: 'Coverage Start Date',
    },
    {
      accessorKey: 'coverageEndDate',
      header: 'Coverage End Date',
    },
    {
      accessorKey: 'premiumAmount',
      header: 'Premium Amount (GHS)',
      cell: (info: any) => `GHS ${info.getValue()}`,
    },
    {
      accessorKey: 'paymentFrequency',
      header: 'Payment Frequency',
    },
    {
      accessorKey: 'paymentDate',
      header: 'Payment Date',
    },
    {
      accessorKey: 'deductible',
      header: 'Deductible (GHS)',
      cell: (info : any) => `GHS ${info.getValue()}`,
    },
    {
      accessorKey: 'coverageDetails',
      header: 'Coverage Details',
    },
    {
      accessorKey: 'renewalDate',
      header: 'Renewal Date',
    },
    {
      accessorKey: 'notesRemarks',
      header: 'Notes/Remarks',
    },
  ];
  