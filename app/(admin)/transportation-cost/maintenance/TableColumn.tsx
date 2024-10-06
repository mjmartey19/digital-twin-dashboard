import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/admin-panel/data-table-column-header"
import { Checkbox } from '@/components/ui/checkbox';


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
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "vin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vehicle VIN" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "driverName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Driver Name" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "maintenanceType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Maintenance Type" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "descriptionOfWorkDone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description of Work Done" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "partsReplacedServiced",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parts Replaced/Serviced" />
    ),
    cell: (props: any) => (
      <ul>
        {props.getValue().map((part: string, index: number) => (
          <li key={index}>{part}</li>
        ))}
      </ul>
    ),
  },
  {
    accessorKey: "costOfMaintenance",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Cost of Maintenance (GHS)"
      />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "serviceProvider",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Provider" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "technicianName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Technician Name" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "serviceLocation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Location" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "nextScheduledMaintenance",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Next Scheduled Maintenance"
      />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "notesRemarks",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Notes/Remarks" />
    ),
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
];