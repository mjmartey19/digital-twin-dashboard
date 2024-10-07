"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from "@/components/ui/breadcrumb";
import DashboardLayout from "@/components/admin-panel/DashboardLayout";

export default function DashboardPage() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <ContentLayout title="Dashboard">
      <div className="flex justify-between items-center">
        {/* Breadcrumb Section */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Date Section */}
        <div className="text-gray-500 text-sm">
          {currentDate}
        </div>
      </div>

      {/* Dashboard Content */}
      <DashboardLayout />
    </ContentLayout>
  );
}
