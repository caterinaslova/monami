"use client"
import { logout } from "@/actions/usuarioAction"
import { Button } from "@/components/ui/button"
import { Session } from 'next-auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"


export default function BotonPerfilCliente({session}:{session?:Session}) {
  return (
    <DropdownMenu >
  <DropdownMenuTrigger className=" cursor-pointer hidden xl:block">{session?.user.name}</DropdownMenuTrigger>
  <DropdownMenuContent className="mr-3 hidden xl:block">
    <DropdownMenuItem className="cursor-pointer hidden xl:block"><Link href="/monamipadelsquash/misdatos">Mis Datos</Link></DropdownMenuItem>
    <DropdownMenuItem className="cursor-pointer hidden xl:block"><Link href={'/monamipadelsquash/misreservas'}>Mis Reservas</Link></DropdownMenuItem>
    {session?.user.role==="ADMIN"  && <DropdownMenuItem className="cursor-pointer hidden xl:block"><Link href="/admin">Panel</Link></DropdownMenuItem>}
    <DropdownMenuItem className="cursor-pointer" onClick={async ()=>await logout()}>Salir</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}
