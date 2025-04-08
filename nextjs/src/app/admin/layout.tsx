"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";
import ProtectedRouteForAdmin from "./ProtectedRouteForAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRouteForAdmin>
    <SidebarProvider className="mt-5">
      <AppSidebar variant="inset" />
     
      <div className="flex flex-1 flex-col mt-5">{children}</div>
     
    </SidebarProvider>
    </ProtectedRouteForAdmin>
  );
}
