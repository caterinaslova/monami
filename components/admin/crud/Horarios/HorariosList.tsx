
import { HorarioPosible } from '@/lib/generated/prisma';
import { z } from 'zod';
import HorarioForm from './HorariosForm';


const FormSchema = z.object({
  dia: z.string(),
  horarioComienzo: z.string(),
  abierto: z.string(),
});

type HorarioFormTypes = {
  horariosDeEseDia: HorarioPosible[];
  tarea: "abrir" | "mostrar"
};

export default function HorariosList({ horariosDeEseDia,tarea }: HorarioFormTypes) {

  return (
  

      <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-1'>
            {horariosDeEseDia.map((horario) => (
                <HorarioForm horario={horario} key={horario.id} tarea={tarea} />
            ))}
      </div>

 )
}
