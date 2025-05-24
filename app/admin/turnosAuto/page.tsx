import { DataTable } from "@/components/admin/crud/generales/data-table"
import Titulo from "@/components/admin/generales/Titulo"
import prisma from "@/lib/prisma"
import { columns } from "./columns"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

const getTurnosAutoReservados = async ()=>{

  const turnos = await prisma.turnoRegistradoPorCliente.findMany({include:{usuario:{select:{id:true,name:true}}},orderBy:{createdAt:'desc'}})
  return turnos
}


export default async function TurnosAutoGestionados() {
    const session = await auth()
    if (!session?.user.id || session?.user.role !== "ADMIN"){
      redirect('/login')
    }
    const data = await getTurnosAutoReservados()
  return (
    <div>
      <Titulo titulo='Listado de Turnos Autoregistrados' />
      <div className='container mx-auto py-1 max-w-[800px]'>
        <DataTable
          columns={columns}
          data={data}

        />
      </div>
    </div>
  )
}
