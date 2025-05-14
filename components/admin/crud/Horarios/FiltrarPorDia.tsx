'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { diasOrdenados } from '@/lib/datos';

export default function FiltrarPorDia() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const manejoSelect = (evento: string) => {
    const params = new URLSearchParams(searchParams);

    if (evento) {
      params.set('dia', evento);
    } else {
      params.delete('dia');
    }

    router.replace(`${pathname}?${params}`);
  };

  return (
    <Select onValueChange={manejoSelect} defaultValue='aLunes'>
      <SelectTrigger className='w-[210px] border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black dark:text-zinc-400'>
        <SelectValue
          className='text-zinc-100'
          placeholder='Seleccione una condición'
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Seleccione un día</SelectLabel>
          <SelectItem value='aLunes'>Lunes</SelectItem>
          <SelectItem value='bMartes'>Martes</SelectItem>
          <SelectItem value='cMiércoles'>Miércoles</SelectItem>
          <SelectItem value='dJueves'>Jueves</SelectItem>
          <SelectItem value='eViernes'>Viernes</SelectItem>
          <SelectItem value='fSábado'>Sábado</SelectItem>
             <SelectItem value='gDomingo'>Domingo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
