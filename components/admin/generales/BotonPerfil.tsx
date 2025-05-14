import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function BotonPerfil() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Paola Kowal</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Mis datos</DropdownMenuItem>
        <DropdownMenuItem>Configuraciones</DropdownMenuItem>
        <DropdownMenuItem>Salir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
