import { logout } from '@/actions/usuarioAction';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { LandPlot, Menu } from 'lucide-react';
import { Session } from 'next-auth';
import Link from 'next/link';
import { useState } from 'react';


export default function MenuCliente({session}:{session:Session| null | undefined}) {

  const [openDrop, setOpenDrop] = useState(false)
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild className='xl:hidden'>
        <span className='text-white cursor-pointer'>
          <Menu size={36!} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='xl:hidden'>
        <DropdownMenuItem onClick={()=>setOpenDrop(false)}><Link href="/">Inicio</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpenDrop(false)}><Link href="/monamipadelsquash/escuela">Escuela</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpenDrop(false)}><Link href="/monamipadelsquash/reservas">Reservas</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpenDrop(false)}><Link href="/monamipadelsquash/torneos">Torneos</Link></DropdownMenuItem>
      
        
        <DropdownMenuItem onClick={()=>setOpenDrop(false)}> <Link href="https://maps.app.goo.gl/UcyNPscFnckB6GnB9" target="_blank" className="flex gap-2"><span className="text-[#00BDA7]"><LandPlot/></span><span className="tracking-widest">Enrique Larreta 660</span></Link></DropdownMenuItem>
   
          <DropdownMenuItem onClick={()=>setOpenDrop(false)} >{session?.user.id ?(<Link href="/monamipadelsquash/misreservas">Mis Reservas</Link>) :(<Link href="/login">Ingresar</Link>)}</DropdownMenuItem>
          {
            session?.user.name &&  <DropdownMenuItem className="cursor-pointer" onClick={async ()=>await logout()}>Salir</DropdownMenuItem>
          }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
