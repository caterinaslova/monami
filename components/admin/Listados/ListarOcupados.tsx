import { referenciaDia } from '@/lib/datos';
import { HorarioPosible } from '@/lib/generated/prisma';
import { DiaConLetras } from '@/lib/schemas';
import { TurnoFijoType, TurnoPuntualType } from '@/lib/types';
import { GiImpLaugh } from "react-icons/gi";


const canchas = ['hora', 'Squash1', 'Squash2', 'Squash3', 'Padel1', 'Padel2'];

type ListarOcupadosProps = {
  fecha: Date;
  turnosPuntuales: TurnoPuntualType[];
  turnosFijos: TurnoFijoType[];
  horarioDeEseDia: HorarioPosible[];
  conNombre:boolean
};

export default function ListarOcupados({
  fecha,
  turnosPuntuales,
  turnosFijos,
  horarioDeEseDia,
  conNombre
}: ListarOcupadosProps) {
 

  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const anio = fecha.getFullYear();

  const diaNumero = fecha.getDay();

  const diaReferenciado = DiaConLetras.parse(referenciaDia[diaNumero]);

  const hoy = new Date(anio, mes, dia);
  hoy.setHours(0, 0, 0);

  const siguiente = new Date(anio, mes, dia);
  siguiente.setHours(23, 59, 59);

  const turnosfijosHoy = turnosFijos.filter(
    (item) => item.dia === diaReferenciado
  );
  const turnosfechaHoy = turnosPuntuales.filter(
    (item) => item.fecha >= hoy && item.fecha <= siguiente
  );

  const horas = horarioDeEseDia.map((item) => item.horarioComienzo);

  const hayTurnos = horas.length !== 0;

  const mitad = Math.ceil(horas.length / 2);
  const primeraMitad = horas.slice(0, mitad);
  const segundaMitad = horas.slice(mitad);

  return (
    <>
      {!hayTurnos ? (
        <div className='bg-green-200 px-4 py-3 my-10 rounded-lg tracking-widest text-5xl flex gap-4'>
           <span className='text-red-700'><GiImpLaugh /></span>
           <span>Cerrado</span>
        </div>
      ) : (
        <>
            <div className='flex flex-col md:flex-row justify-center items-start gap-5'>
            <div className='grid grid-cols-6 gap-2 p-4'>
              {canchas.map((cancha) => (
                <div key={cancha}>
                  <h3 className='text-center font-bold mb-2 text-xs md:text-base'>{cancha}</h3>
                  {primeraMitad.map((hora, i) => {
                    const turno = turnosfechaHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );
                    const turnoFijo = turnosfijosHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );

                    return (
                      <div
                        key={i}
                        className={`p-1 text-sm text-center text-stone-900 border mb-1 rounded h-8
                      ${
                        turno || turnoFijo
                          ? turnoFijo
                            ? 'bg-rose-600'
                            : 'bg-rose-300'
                          : 'bg-green-200'
                      }`}
                      >
                      {
                        conNombre ?   cancha === 'hora' ? hora : turno||turnoFijo ? turno ? <p className='text-[10px]'>{turno.cliente.nombre.slice(0,8)}</p> : <p className='text-[10px]'>{turnoFijo!.cliente.nombre.slice(0,8)}</p> : null
                         :cancha==="hora" ?hora : null
                      }

                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className='grid grid-cols-6 gap-2 p-4'>
              {canchas.map((cancha) => (
                <div key={cancha}>
                  <h3 className='text-center font-bold mb-2 text-xs md:text-base'>{cancha}</h3>
                  {segundaMitad.map((hora, i) => {
                    const turno = turnosfechaHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );
                    const turnoFijo = turnosfijosHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );

                    return (
                      <div
                            key={i}
                            className={`p-1 text-sm text-center text-stone-900 border mb-1 rounded h-8
                          ${
                            turno || turnoFijo
                              ? turnoFijo
                                ? 'bg-rose-600'
                                : 'bg-rose-300'
                              : 'bg-green-200'
                          }`}
                          >
                      {
                        conNombre ?   cancha === 'hora' ? hora : turno||turnoFijo ? turno ? <p className='text-[10px]'>{turno.cliente.nombre.slice(0,8)}</p> : <p className='text-[10px]'>{turnoFijo!.cliente.nombre.slice(0,8)}</p> : null
                         :cancha==="hora" ?hora : null
                      }


                        </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
  
    </>
  );
}
