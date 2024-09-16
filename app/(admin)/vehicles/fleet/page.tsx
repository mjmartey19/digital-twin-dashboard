
import { DataTable } from "./data-table-components/data-table";
import { columns } from "./data-table-components/columns";
import { vehiclesData } from "@/constants";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default async function FleetPage() {
  const data = vehiclesData;
  return (
    <ContentLayout title="Vehicle">
      <div className="pb-2 pt-20">
        <DataTable data={data} columns={columns} />
      </div>
    </ContentLayout>
  );
}
