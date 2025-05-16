import Titulo from '@/components/admin/generales/Titulo'
import TurnosSemana from '@/components/admin/Listados/TurnosSemana'
import TituloCliente from '@/components/monami/generales/TituloCliente'
import { Separator } from '@/components/ui/separator'
import prisma from "@/lib/prisma"
import { Suspense } from 'react'
const hoy = new Date()
hoy.setHours(0,0,0,0)

 const getTurnosPuntuales= async ()=>{
  const turnosPuntuales = await prisma.turnoPuntual.findMany({
    where:{
      fecha:{gte:hoy}
    },
    include:{
      cliente:true
    }
  })
  return turnosPuntuales
 }

const getTurnosFijos = async()=>{
  const turnosFijos= await prisma.turnoFijo.findMany({
    include:{
      cliente:true
    }
  })
  return turnosFijos
}

const getHorario = async ()=>{
  const horario = await prisma.horarioPosible.findMany({
    where:{
      abierto:true
    }
  })
  return horario
}

export default async function ReservasPage() {

  const turnosPuntuales = await getTurnosPuntuales()
  const turnosFijos = await getTurnosFijos()
  const horario = await getHorario()
  const conNombre=false
  return ( 
    <div className='w-full h-[100vh]flex mt-25 justify-center items-center' id="home">
      <TituloCliente texto={'Turnos de la semana'}/>
      <Separator className='mb-3' />
      <Suspense>
         <TurnosSemana turnosPuntuales={turnosPuntuales} turnosFijos={turnosFijos} horario={horario} conNombre={conNombre}/>
      </Suspense>
    </div>
  )
}
