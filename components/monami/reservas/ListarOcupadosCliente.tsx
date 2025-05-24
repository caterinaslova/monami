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
import { TurnoFijoType, TurnoPuntualType } from '@/lib/types';
import { addHours, format } from 'date-fns';
import { GiImpLaugh } from 'react-icons/gi';
import FormReservaCliente from './FormReservaCliente';


// para hacer el listado
const canchas = ['Hora', 'Squash1', 'Squash2', 'Squash3', 'Padel1', 'Padel2'];
const diagonal="bg-gray-100 before:content-[''] before:absolute before:w-[50%] before:h-[2px] before:bg-black before:top-1/2 before:left-[30%] before:rotate-45"

type ListarOcupadosProps = {
  fecha: Date;
  turnosPuntuales: TurnoPuntualType[];
  turnosFijos: TurnoFijoType[];
  turnosAutoRegistrados:TurnoRegistradoPorCliente[]
  horarioDeEseDia: HorarioPosible[];
  email?:string | null;
  userId?: string | null;
 
};

export default function ListarOcupadosCliente({
  fecha,
  turnosPuntuales,
  turnosFijos,
  turnosAutoRegistrados,
  horarioDeEseDia,
  email,
  userId
  
}: ListarOcupadosProps) {
 // para mantener la sheet abierta mientras se guardan los datos


  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const anio = fecha.getFullYear();

  const diaNumero = fecha.getDay();


  // para poder listar los fijos
  const diaReferenciado = DiaConLetras.parse(referenciaDia[diaNumero]);


  // para poder hacer un rango y listar los puntuales
  const hoy = new Date(anio, mes, dia);
  hoy.setHours(0, 0, 0);


const ahora = new Date() // no uses Date.now()
const masTresHoras = addHours(ahora, 3)

  // const ahora= Date.now()
  const ahoraString= format(ahora,'yyyy-MM-dd')
  const horaActual = format(ahora,'HH:mm')

  
  const fechaElegida = `${anio}-${mes<9 ? `0${mes+1}` : `${mes+1}`}-${dia}` 

  let esElMismoDia=false
  if (ahoraString===fechaElegida){
    esElMismoDia=true
  }

 

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
  // un array con solo las horas
 let horas = horarioDeEseDia.map((item) => item.horarioComienzo);
 if (esElMismoDia){
    horas= horas.filter(item=>item> horaActual)
 }

  // por si está cerrado 
  const hayTurnos = horas.length !== 0;

  // para hacer 2 cuadros
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
                      <Sheet key={i}  >
                        <SheetTrigger className='block w-full' disabled={turno || turnoFijo || turnoAuto || cancha==="Hora" || cerrado ? true : false}>
                          <div
                            className={`p-1 text-sm text-center cursor-grab text-stone-900 border relative mb-1 rounded h-8 hover:${turno || turnoFijo || turnoAuto || cancha==="Hora" || cerrado  ? 'bg-transparent' :'bg-[#00BDA7]'}
                      ${
                        turno || turnoFijo || turnoAuto || cerrado
                          ? turnoFijo
                            ?  'bg-stone-800'
                            :  cerrado ? `${diagonal}` : 'bg-stone-500'
                          :'bg-green-200'
                      }`}
                          >
                            {
                            cancha==="Hora" && <p>{hora}</p>
                           }                          
                          </div>
                        </SheetTrigger>
                        <SheetContent  >
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
                              <FormReservaCliente  horariosPosibles={horarioDeEseDia} cancha={cancha} horaComienzo={hora} fecha={hoy} email={email} userId={userId} />
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
                        <SheetTrigger className='block w-full' disabled={turno || turnoFijo || cancha==="Hora" || turnoAuto || cerrado ? true : false}>
                          <div
                    
                            className={`p-1 text-sm text-center cursor-grab text-stone-900 border mb-1 relative rounded h-8 hover:${turno || turnoFijo || turnoAuto || cancha==="Hora" || cerrado ? 'bg-transparent' :'bg-[#00BDA7]'}
                      ${
                        turno || turnoFijo || turnoAuto || cerrado
                          ? turnoFijo
                            ? 'bg-stone-800'
                            :  cerrado ? `${diagonal}` : 'bg-stone-500'
                          : 'bg-green-200'
                      }`}
                          >
                           {
                            cancha==="Hora" && <p>{hora}</p>
                           }
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
                              <FormReservaCliente  horariosPosibles={horarioDeEseDia} cancha={cancha} horaComienzo={hora} fecha={hoy} email={email} userId={userId} />
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
