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

export default function LabourPage() {
  return (
    <ContentLayout title="Labour Record">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/labour">Labour</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
      <PlaceholderContent />
    </ContentLayout>
  );
}
