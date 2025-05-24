

import { logout } from '@/actions/usuarioAction';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useState } from 'react';
export default function BotonPerfil({user}:{user:string}) {
   const [open,setOpen] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='cursor-grab'><Button variant={"outline"}>{user}</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/admin/misdatos"><DropdownMenuItem onClick={()=>setOpen(false)}>Mis datos</DropdownMenuItem></Link>
        <DropdownMenuItem onClick={()=>setOpen(false)}><Link href="/admin/auth/cambiarcontrasena">Cambiar contraseña</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={async ()=>await logout()}>Salir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
