"use client"


import Logo from '@/components/admin/generales/Logo'
import { LandPlot } from "lucide-react"
import Link from "next/link"
import BotonLogin from "./BotonLogin"
import BotonPerfilCliente from "./BotonPerfilCliente"
import MenuCliente from "./MenuCliente"
import { Session } from 'next-auth'




export  function MonAmiNavbar({session}:{session?:Session | null}) {
    const numero = '5493512521739'; // Código de país + número sin espacios
  const mensaje = 'Hola, quiero reservar cancha de: ';

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

 
 
return(
  <div className="py-4 px-6 h-20 bg-primary fixed top-0 right-0 left-0 flex items-center z-10  gap-2  justify-between">
    <div className=""> <Link href="/"><Logo /> </Link></div>
    <MenuCliente session={session}/>
    <div className="hidden xl:flex flex-wrap justify-center items-center gap-1 xl:gap-20 text-white">
        <Link href="/monamipadelsquash/escuela" className="hidden xl:block tracking-widest">Escuela</Link>
        <Link href="/monamipadelsquash/reservas" className="hidden xl:block tracking-widest">Reservas</Link>
         <Link href="/monamipadelsquash/torneos" className="hidden xl:block tracking-widest">Torneos</Link>
        <Link href="https://maps.app.goo.gl/UcyNPscFnckB6GnB9" target="_blank" className="flex gap-2"><span className="text-[#00BDA7]"><LandPlot/></span><span className="tracking-widest">Enrique Larreta 660</span></Link>
        {
          session?.user.id ? (<BotonPerfilCliente session={session}/>) :(  <BotonLogin/>)
        }
      

    </div>
  </div>

)}

