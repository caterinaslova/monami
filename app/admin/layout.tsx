import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AdminNavbar } from "@/components/admin/generales/AdminNavbar"
import { auth } from "@/auth"
import { redirect } from "next/navigation"


export default async function AdminLayout({ children }: { children: React.ReactNode }) {
 const session = await auth()
 const role = session?.user.id ? session.user.role : ''
 const name = session?.user.id ? session.user.name : ''
 
  return (
    <SidebarProvider>
      <AdminNavbar user={session?.user?.name ? session?.user.name : 'No logueado'}/> 
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
