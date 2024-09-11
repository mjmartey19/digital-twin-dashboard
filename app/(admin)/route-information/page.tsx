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

export default function RouteInfoPage() {
  return (
    <ContentLayout title="Route Information">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/route-information">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
      <PlaceholderContent />
    </ContentLayout>
  );
}
