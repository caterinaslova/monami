import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AdminNavbar } from "@/components/admin/generales/AdminNavbar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminNavbar/> 
      <AppSidebar  />
      <main className="w-full">
         <SidebarTrigger className="z-50 mt-23 ml-1 cursor-pointer " />
         <div className=" -mt-10 pr-4">

          {children}
         </div>
      </main>
    </SidebarProvider>
  )
}
