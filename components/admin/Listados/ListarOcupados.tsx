'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { referenciaDia } from '@/lib/datos';
import { HorarioPosible, TurnoRegistradoPorCliente } from '@/lib/generated/prisma';
import { DiaConLetras } from '@/lib/schemas';
import { TurnoAutoType, TurnoFijoType, TurnoPuntualType } from '@/lib/types';
import { format } from 'date-fns';
import { GiImpLaugh } from 'react-icons/gi';
import FormReserva from './FormReserva';
import { useEffect } from 'react';

const canchas = ['Hora', 'Squash1', 'Squash2', 'Squash3', 'Padel1', 'Padel2'];

const diagonal="bg-gray-100 before:content-[''] before:absolute before:w-[50%] before:h-[2px] before:bg-black before:top-1/2 before:left-[30%] before:rotate-45"

type ListarOcupadosProps = {
  fecha: Date;
  turnosPuntuales: TurnoPuntualType[];
  turnosFijos: TurnoFijoType[];
  horarioDeEseDia: HorarioPosible[];
  turnosAutoRegistrados:TurnoAutoType[]
   clientesSelect: { label: string; value: string }[];
};

export default function ListarOcupados({
  fecha,
  turnosPuntuales,
  turnosFijos,
  horarioDeEseDia,
  turnosAutoRegistrados,
  clientesSelect
  
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
  const turnosAutoHoy = turnosAutoRegistrados.filter(
    (item) => item.fecha >= hoy && item.fecha <= siguiente
  );
  const cerrados = horarioDeEseDia.filter(item=>item.mostrar && !item.abierto)
  const horas = horarioDeEseDia.map((item) => item.horarioComienzo);

  const hayTurnos = horas.length !== 0;

  const mitad = Math.ceil(horas.length / 2);
  const primeraMitad = horas.slice(0, mitad);
  const segundaMitad = horas.slice(mitad);


  return (
    <>
      {!hayTurnos ? (
        <div className='bg-green-200 px-4 py-3 my-10 rounded-lg tracking-widest text-5xl flex gap-4'>
          <span className='text-red-700'>
            <GiImpLaugh />
          </span>
          <span>Cerrado</span>
        </div>
      ) : (
        <>
          <div className='flex flex-col md:flex-row justify-center items-start gap-5'>
            <div className='grid grid-cols-6 gap-2 p-4'>
              {canchas.map((cancha) => (
                <div key={cancha}>
                  <h3 className='text-center font-bold mb-2 text-xs md:text-base'>
                    {cancha}
                  </h3>
                  {primeraMitad.map((hora, i) => {
                    const turno = turnosfechaHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );
                    const turnoFijo = turnosfijosHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );
                    const turnoAuto = turnosAutoHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );
                    const cerrado = cerrados.find(item=>item.horarioComienzo===hora)
                    return (
                      <Sheet key={i} >
                        <SheetTrigger className='block w-full' disabled={turno || turnoFijo || turnoAuto || cancha==="Hora" || cerrado ? true : false}>
                          <div

                            className={`p-1 text-sm text-center cursor-grab text-stone-900 border mb-1 rounded relative h-8 hover:${turno || turnoFijo || turnoAuto || cancha==="Hora" || cerrado ? 'bg-transparent' :'bg-[#00BDA7]'}
                      ${
                        turno || turnoFijo || turnoAuto || cerrado
                          ? turnoFijo
                            ? 'bg-stone-800'
                            : turnoAuto ? 'bg-red-500' : cerrado ? `${diagonal}` :'bg-stone-500'
                          : 'bg-green-200'
                      }`}
                          >
                            {cancha === 'Hora' ? (
                                hora
                              ) : turno || turnoFijo || turnoAuto ? (
                                turno ? (
                                  <p className='text-[10px] text-white'>
                                    {turno.cliente.nombre.slice(0, 8)}
                                  </p>
                                ) : turnoFijo ? (
                                  <p className='text-[10px] text-white'>
                                    {turnoFijo!.cliente.nombre.slice(0, 8)}
                                  </p>
                                ): (<p className='text-[10px] text-white'>{turnoAuto!.usuario.name.slice(0,8)}</p>)
                              ) : null}
                          </div>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>Revisa los datos a  grabar</SheetTitle>
                            <div className="mt-5">
                              <SheetDescription className='text-lg tracking-wide text-stone-900 dark:text-stone-100'><strong>Día: </strong> {format(hoy, 'dd-MM-yyyy')}
                              </SheetDescription>
                              <SheetDescription className='text-lg tracking-wide text-stone-900 dark:text-stone-100'><strong>Cancha: </strong> {cancha}</SheetDescription>
                              <SheetDescription className='text-lg tracking-wide text-stone-900 dark:text-stone-100'><strong>A partir de: </strong>{hora} h.</SheetDescription>
                            </div>

                          </SheetHeader>
                          <div className='grid gap-4 py-4'>
                              <FormReserva clientesSelect={clientesSelect} horariosPosibles={horarioDeEseDia} cancha={cancha} horaComienzo={hora} fecha={hoy}/>
                          </div>

                        </SheetContent>
                      </Sheet>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className='grid grid-cols-6 gap-2 p-4'>
              {canchas.map((cancha) => (
                <div key={cancha}>
                  <h3 className='text-center font-bold mb-2 text-xs md:text-base'>
                    {cancha}
                  </h3>
                  {segundaMitad.map((hora, i) => {
                    const turno = turnosfechaHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );
                    const turnoFijo = turnosfijosHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );
                     const turnoAuto = turnosAutoHoy.find(
                      (t) =>
                        t.modulosOcupados.includes(hora) && t.cancha === cancha
                    );
                    const cerrado = cerrados.find(item=>item.horarioComienzo===hora)
                    return (
                      <Sheet key={i} >
                        <SheetTrigger className='block w-full' disabled={turno || turnoFijo || turnoAuto || cancha==="Hora" || cerrado ? true : false}>
                          <div
       
                            className={`p-1 text-sm text-center cursor-grab text-stone-900 border relative mb-1 rounded h-8 hover:${turno || turnoFijo || turnoAuto || cancha==="Hora" || cerrado ? 'bg-transparent' :'bg-[#00BDA7]'}
                      ${
                        turno || turnoFijo || turnoAuto || cerrado
                          ? turnoFijo
                            ? 'bg-stone-800'
                            : turnoAuto? 'bg-red-500' : cerrado ? `${diagonal}`: 'bg-stone-500'
                          : 'bg-green-200'
                      }`}
                          >
                            {cancha === 'Hora' ? (
                                hora
                              ) : turno || turnoFijo || turnoAuto ? (
                                turno ? (
                                  <p className='text-[10px] text-white'>
                                    {turno.cliente.nombre.slice(0, 8)}
                                  </p>
                                ) : turnoFijo ? (
                                  <p className='text-[10px] text-white'>
                                    {turnoFijo!.cliente.nombre.slice(0, 8)}
                                  </p>
                                ) : (<p className='text-[10px] text-white'>{turnoAuto!.usuario.name.slice(0,8)}</p>)
                              ) : null
                            }
                          </div>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>Revisa los datos a  grabar</SheetTitle>
                            <div className="mt-5">
                              <SheetDescription className='text-lg tracking-wide text-stone-900'><strong>Día: </strong> {format(hoy, 'dd-MM-yyyy')}
                              </SheetDescription>
                              <SheetDescription className='text-lg tracking-wide text-stone-900'><strong>Cancha: </strong> {cancha}</SheetDescription>
                              <SheetDescription className='text-lg tracking-wide text-stone-900'><strong>A partir de: </strong>{hora} h.</SheetDescription>
                            </div>

                          </SheetHeader>
                          <div className='grid gap-4 py-4'>
                              <FormReserva clientesSelect={clientesSelect} horariosPosibles={horarioDeEseDia} cancha={cancha} horaComienzo={hora} fecha={hoy}/>
                          </div>

                        </SheetContent>
                      </Sheet>
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
