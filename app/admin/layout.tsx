import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AdminNavbar } from "@/components/admin/generales/AdminNavbar"
import { auth } from '@/auth';
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const  session = await auth()
      if(!session?.user?.id){
        redirect("/login")
      }
  return (
    <SidebarProvider>
      <AdminNavbar user={session?.user?.email ? session?.user.email : "No logueado"}/> 
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
