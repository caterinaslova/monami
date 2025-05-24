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
        <Link href="/"><DropdownMenuItem onClick={()=>setOpenDrop(false)}>Inicio</DropdownMenuItem></Link>
       <Link href="/monamipadelsquash/escuela"><DropdownMenuItem onClick={()=>setOpenDrop(false)}>Escuela</DropdownMenuItem></Link>
        <Link href="/monamipadelsquash/reservas"><DropdownMenuItem onClick={()=>setOpenDrop(false)}>Reservas</DropdownMenuItem></Link>
        <Link href="/monamipadelsquash/torneos"><DropdownMenuItem onClick={()=>setOpenDrop(false)}>Torneos</DropdownMenuItem></Link>
      
        
      <Link href="https://maps.app.goo.gl/UcyNPscFnckB6GnB9" target="_blank" className="flex gap-2"><DropdownMenuItem onClick={()=>setOpenDrop(false)}><span className="text-[#00BDA7]"><LandPlot/></span><span className="tracking-widest">Enrique Larreta 660</span></DropdownMenuItem></Link>
       {session?.user.id && <Link href="/monamipadelsquash/misdatos"> <DropdownMenuItem onClick={()=>setOpenDrop(false)} >Mis Datos</DropdownMenuItem></Link> }
   
         {session?.user.id ?(<Link href="/monamipadelsquash/misreservas"> <DropdownMenuItem onClick={()=>setOpenDrop(false)} >Mis Reservas</DropdownMenuItem></Link>) :(<Link href="/login"><DropdownMenuItem onClick={()=>setOpenDrop(false)} >Ingresar</DropdownMenuItem></Link>)}
          {
            session?.user.name &&  <DropdownMenuItem className="cursor-pointer" onClick={async ()=>await logout()}>Salir</DropdownMenuItem>
          }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
