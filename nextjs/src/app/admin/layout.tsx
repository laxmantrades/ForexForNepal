"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <SidebarProvider className="mt-5">
      <AppSidebar variant="inset" />
     
      <div className="flex flex-1 flex-col mt-5">{children}</div>
     
    </SidebarProvider>
 
  );
}
