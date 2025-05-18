import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function MenuCliente() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className='xl:hidden'>
        <span className='text-white'>
          <Menu size={36!} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='xl:hidden'>
        <DropdownMenuItem><Link href="/monamipadelsquash/escuela">Escuela</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/monamipadelsquash/reservas">Reservas</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/monamipadelsquash/torneos">Torneos</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
