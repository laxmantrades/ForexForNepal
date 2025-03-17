import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar className="w-64 border-r mt-26">
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="px-4 text-xl font-bold">DashBoard</div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
    </Sidebar>
  );
}
