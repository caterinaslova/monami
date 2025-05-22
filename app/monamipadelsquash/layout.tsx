
import { auth } from "@/auth"
import { MonAmiNavbar } from "@/components/monami/generales/MonAmiNavbar"
import Wa from "@/components/monami/generales/Wa"
import Footer from "@/components/monami/secciones/Footer"


export default async function MonAmiLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()


  return (
    
     
    <>
       <MonAmiNavbar session={session}/> 
      <main className="w-full mt-5">
          {children}
            <Wa/>
      </main>
      <Footer/>

    </>
  )
}
