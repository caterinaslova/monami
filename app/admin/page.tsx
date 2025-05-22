import { auth } from '@/auth'
import Titulo from '@/components/admin/generales/Titulo'
import TurnosSemana from '@/components/admin/Listados/TurnosSemana'
import prisma from "@/lib/prisma"
import { redirect } from 'next/navigation'
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
  const getTurnosRegistradosPorClientes= async ()=>{
  const turnosRegistrados = await prisma.turnoRegistradoPorCliente.findMany({
    where:{
      fecha:{gte:hoy}
    },
    // include:{
    //   usuario:true
    // }
  })
  return turnosRegistrados
 }

const getHorario = async ()=>{
  const horario = await prisma.horarioPosible.findMany({
    where:{
      OR:[
        {abierto:true},
        {mostrar:true}
      ]
      
    },
   orderBy:[
      {dia:'asc'},
      {horarioComienzo:'asc'}
    ]
  })
  return horario
}
const getClientesParaSelect = async ()=>{
    const clientes = await prisma.cliente.findMany({})
      const turnosAutoRegistrados = await getTurnosRegistradosPorClientes()
  
    const datosSelect = clientes.map(cliente=>{
      return{
        label:cliente.nombre,
        value:cliente.id
      }
    })
    return datosSelect
  }

export default async function AdminPage() {

  const session = await auth()
  if (!session?.user.id || session?.user.role !== "ADMIN"){
    redirect('/login')
  }

  const turnosPuntuales = await getTurnosPuntuales()
  const turnosFijos = await getTurnosFijos()
  const turnosAutoRegistrados = await getTurnosRegistradosPorClientes()
  const horario = await getHorario()
  const clientesSelect = await getClientesParaSelect()

  return ( 
    <div className='w-full h-[100vh]flex justify-center items-center'>
      <Titulo titulo={'Turnos de la semana'}/>
      <Suspense fallback={<p className='text-xl flex text-stone-700 justify-center items-center mt-10'>Cargando datos...</p>} >
        <TurnosSemana turnosPuntuales={turnosPuntuales} turnosFijos={turnosFijos} horario={horario}  clientesSelect={clientesSelect}  turnosAutoRegistrados={turnosAutoRegistrados}/>
      </Suspense>
    </div>
  )
}
