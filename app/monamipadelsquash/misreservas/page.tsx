import { auth } from "@/auth"
import { DataTable } from "@/components/admin/crud/generales/data-table"
import Titulo from "@/components/admin/generales/Titulo"

import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import { columns } from "./columns"

const getTurnosAutoReservados = async (usuarioId:string)=>{

  const turnos = await prisma.turnoRegistradoPorCliente.findMany({where:{usuarioId:usuarioId},orderBy:{createdAt:'desc'}})
  return turnos
}


export default async function MisReservasPage() {
  const session = await auth()
  if (!session){
    redirect('/login')
  }
  const data = await getTurnosAutoReservados(session.user.id)

  return (
    <div className="mt-25">
      <h2 className="text-center text-2xl font-semibold my-4">Mis Reservas</h2>
      <p className="text-center font-bold text-stone-700">Una reserva solo puede eliminarse 24 horas antes.</p>
      <div className='container mx-auto py-1 max-w-[800px]'>
        <DataTable
          columns={columns}
          data={data}

        />
      </div>
    </div>
  )
}
