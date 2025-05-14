import Titulo from '@/components/admin/generales/Titulo'
import TurnosSemana from '@/components/admin/Listados/TurnosSemana'
import prisma from "@/lib/prisma"
const hoy = new Date()
hoy.setHours(0,0,0,0)

 const getTurnosPuntuales= async ()=>{
  const turnosPuntuales = await prisma.turnoPuntual.findMany({
    where:{
      fecha:{gte:hoy}
    }
  })
  return turnosPuntuales
 }

const getTurnosFijos = async()=>{
  const turnosFijos= await prisma.turnoFijo.findMany({})
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

export default async function AdminPage() {

  const turnosPuntuales = await getTurnosPuntuales()
  const turnosFijos = await getTurnosFijos()
  const horario = await getHorario()
  return ( 
    <div className='w-full h-[100vh]flex justify-center items-center'>
      <Titulo titulo={'Turnos de la semana'}/>
      <TurnosSemana turnosPuntuales={turnosPuntuales} turnosFijos={turnosFijos} horario={horario}/>
    </div>
  )
}
