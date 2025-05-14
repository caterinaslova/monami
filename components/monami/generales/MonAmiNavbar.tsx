"use client"

import * as React from "react"

import Logo from '@/components/admin/generales/Logo'
import { LandPlot, PhoneOutgoing } from "lucide-react"
import Link from "next/link"



export function MonAmiNavbar() {
    const numero = '5493512521739'; // Código de país + número sin espacios
  const mensaje = 'Hola, quiero reservar cancha de: ';

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
 
return(
  <div className="py-4 px-6 h-20 bg-primary fixed top-0 right-0 left-0 flex items-center  gap-2  justify-between">
    <div className=""> <Link href="/"><Logo /> </Link></div>
    <div className="flex flex-wrap justify-center items-center gap-1 md:gap-20 text-white">
        <Link href="https://maps.app.goo.gl/UcyNPscFnckB6GnB9" target="_blank" className="flex gap-2"><span className="text-[#00BDA7]"><LandPlot/></span><span>Enrique Larreta 660</span></Link>
        <Link href={url} target="_blank" className="flex gap-2"><span className="text-green-500"><PhoneOutgoing/></span><span>351 - 252 1739</span></Link>

    </div>
  </div>

)}

