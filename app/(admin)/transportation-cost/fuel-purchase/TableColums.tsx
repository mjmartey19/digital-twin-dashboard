import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../../components/admin-panel/data-table-column-header';
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
        accessorKey: "vin",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="VIN" />
        ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString",
    }, 
    
    {
        accessorKey: "driverName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Driver Name" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>,
        filterFn: "includesString",
    },
    {
        accessorKey: "fuelType",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fuel Type" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "fuelPurchasedLitres",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fuel Purchased(Liters)" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "fuelCostGHS",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fuel Cost (GHS)" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "fuelStationName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fuel Station Name" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "fuelingLocation",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fuel Location" />
          ),
        cell: (props: any) => {
            const { gps, address } = props.getValue()
            return <p>{gps} - {address}</p>
        }
    },
    {
        accessorKey: "paymentMethod",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Payment Method" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "date",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date" />
          ),
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: "noteRemark",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Note Remark" />
        ),
        cell: (props: any) => <p>{props.getValue()}</p>
    }
]