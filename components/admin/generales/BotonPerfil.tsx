

import { logout } from '@/actions/administradoresAction';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
export default function BotonPerfil({user}:{user:string}) {
   

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='cursor-grab'><Button variant={"outline"}>{user}</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Mis datos</DropdownMenuItem>
        <DropdownMenuItem><Link href="/admin/auth/cambiarcontrasena">Cambiar contraseña</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={async ()=>await logout()}>Salir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
