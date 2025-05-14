import { Button } from '@/components/ui/button';
import { generarHoras } from '@/lib/generarHoras';

type Turno = {
  _id: string;
  dia: string;
  horaInicio: string;
  horaFin: string;
  ocupado: boolean;
};
const turnos = [
  {
    _id: '1',
    dia: 'lunes',
    cancha:'S1',
    horaInicio: '10:00',
    horaFin: '11:00',
    ocupado: true,
  },
  {
    _id: '1',
    dia: 'lunes',
    cancha:'S1',
    horaInicio: '10:30',
    horaFin: '11:00',
    ocupado: true,
  },
  {
    _id: '2',
    dia: 'martes',
    cancha:'S2',
    horaInicio: '11:00',
    horaFin: '12:00',
    ocupado: true,
  },
];

const canchas = ['hora', 'S1', 'S2', 'S3', 'P1', 'P2'];
const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

export default function Home() {
  const horas = generarHoras(8, 24);
  return (
    <div className='flex flex-wrap justify-center '>
      {dias.map((dia) => (
        <div key={dia} className='flex flex-col '>
          <h2 className='font-bold text-center mt-4 capitalize'>{dia}</h2>
          <div className='grid grid-cols-6 gap-2 p-4'>
            {canchas.map((cancha) => (
              <div key={cancha}>
                <h3 className='text-center font-bold mb-2'>{cancha}</h3>
                {horas.map((hora, i) => {
                  const turno = turnos.find(
                    (t) => t.dia === dia && t.horaInicio === hora && t.cancha===cancha
                  );
                  return (
                    <div
                      key={i}
                      className={`p-1 text-sm text-center border mb-1 rounded h-8
                      ${turno?.ocupado ? 'bg-red-300' : 'bg-green-200'}`}
                    >
                      {cancha === 'hora' ? hora : null}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
