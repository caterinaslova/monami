import { MonAmiNavbar } from "@/components/monami/generales/MonAmiNavbar"
import Footer from "@/components/monami/secciones/Footer"

export default function MonAmiLayout({ children }: { children: React.ReactNode }) {
  return (
    
     
    <>
       <MonAmiNavbar/> 
      <main className="w-full mt-5">
          {children}
       
      </main>
      <Footer/>
    </>
  )
}
