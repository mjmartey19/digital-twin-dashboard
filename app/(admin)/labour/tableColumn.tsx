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
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "Name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Staff Name" />
        ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      },
      {
        accessorKey: "Role",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Role" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      },
      {
        accessorKey: "VIN",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="VIN" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      },
      {
        accessorKey: "WorkerdHours",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Hours Worked(per shift)" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      },
      {
        accessorKey: "Wages",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Wages(GHS)" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      },
      {
        accessorKey: "AssignedDate",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date AssigneHours Workedd" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      },
      {
        accessorKey: "Phone",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Phone" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      },
      {
        accessorKey: "Email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      },
      {
        accessorKey: "Qualifications",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Hours Worked" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString"
      }
]
