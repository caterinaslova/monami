import { LandPlot, Menu, PhoneOutgoing } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useState } from 'react';

export default function MenuCliente() {
        const numero = '5493512521739'; // Código de país + número sin espacios
  const mensaje = 'Hola, quiero reservar cancha de: ';

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  const [open, setOpen] = useState(false)
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild className='xl:hidden'>
        <span className='text-white'>
          <Menu size={36!} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='xl:hidden'>
        <DropdownMenuItem onClick={()=>setOpen(false)}><Link href="/">Inicio</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpen(false)}><Link href="/monamipadelsquash/escuela">Escuela</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpen(false)}><Link href="/monamipadelsquash/reservas">Reservas</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpen(false)}><Link href="/monamipadelsquash/torneos">Torneos</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpen(false)}> <Link href="https://maps.app.goo.gl/UcyNPscFnckB6GnB9" target="_blank" className="flex gap-2"><span className="text-[#00BDA7]"><LandPlot/></span><span className="tracking-widest">Enrique Larreta 660</span></Link></DropdownMenuItem>
        <DropdownMenuItem> <Link href={url} target="_blank" className="flex gap-2"><span className="text-green-500"><PhoneOutgoing/></span><span className="tracking-wider">351 - 252 1739</span></Link></DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
