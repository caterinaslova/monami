"use client"
import { logout } from "@/actions/usuarioAction"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Session } from 'next-auth'
import Link from "next/link"
import { useState } from "react"


export default function BotonPerfilCliente({session}:{session?:Session}) {
  const [open,setOpen]= useState(false)
  return (
    <DropdownMenu >
  <DropdownMenuTrigger className=" cursor-pointer hidden xl:block">{session?.user.name}</DropdownMenuTrigger>
  <DropdownMenuContent className="mr-3 hidden xl:block">
    <DropdownMenuItem onClick={()=>setOpen(false)} className="cursor-pointer hidden xl:block" asChild><Link href="/monamipadelsquash/misdatos">Mis Datos</Link></DropdownMenuItem>
    <DropdownMenuItem onClick={()=>setOpen(false)} className="cursor-pointer hidden xl:block" asChild><Link href={'/monamipadelsquash/misreservas'}>Mis Reservas</Link></DropdownMenuItem>
    {session?.user.role==="ADMIN"  && <DropdownMenuItem onClick={()=>setOpen(false)} className="cursor-pointer hidden xl:block"><Link href="/admin">Panel</Link></DropdownMenuItem>}
    <DropdownMenuItem className="cursor-pointer" onClick={async ()=>await logout()}><Link href="/monamipadelsquash/reservas">Salir</Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}
