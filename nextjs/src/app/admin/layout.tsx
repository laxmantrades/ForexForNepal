import AdminLayout from "@/components/admin/MainAdminLayout";



export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
