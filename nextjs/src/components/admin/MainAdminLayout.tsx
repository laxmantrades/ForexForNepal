"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./SideBar"; // Ensure correct path

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex mt-5">
        {/* Admin Sidebar */}
        <AppSidebar />
        <SidebarTrigger />
        {/* Main Content */}
        <div className="">{children}</div>
      </div>
    </SidebarProvider>
  );
}
