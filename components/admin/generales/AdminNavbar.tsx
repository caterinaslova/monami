"use client"

import * as React from "react"

import Logo from '@/components/admin/generales/Logo'
import { ModeToggle } from "@/components/ui/ModeToggle"
import BotonPerfil from "./BotonPerfil"
import Link from "next/link"


export function AdminNavbar({user}:{user:string}) {

return(
  <div className="py-4 px-6 h-20 bg-secondary fixed top-0 right-0 left-0 flex items-center z-10 justify-center gap-10  md:justify-between">
    <div className=""> <Link href="/"><Logo /> </Link></div>
    <div className="flex gap-4">
           <ModeToggle/>
           <BotonPerfil user={user}/>
    </div>
  </div>

)}

