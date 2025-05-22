
import TurnoFijoAgregar from '@/components/admin/crud/TurnosFijos/TurnoFijoAgregar';
import Titulo from '@/components/admin/generales/Titulo';
import prisma from '@/lib/prisma';
import { DataTable } from '../../../components/admin/crud/generales/data-table';
import { columns } from './columns';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';



const getTurnosFijos = async () => {
  const datos = await prisma.turnoFijo.findMany({
    orderBy:{
      createdAt:'desc'
    },
    include:{
      cliente:true
    }
  });
  const turnosOrdenados = datos.sort((a, b) => {
    if (a.cancha < b.cancha) return -1;
    if (a.cancha > b.cancha) return 1;
  
    if (a.dia < b.dia) return -1;
    if (a.dia > b.dia) return 1;
  
    if (a.horaComienzo < b.horaComienzo) return -1;
    if (a.horaComienzo > b.horaComienzo) return 1;
  
    return 0;
  });
  return datos;
};

export default async function TurnosFijosPage() {
    const session = await auth()
    if (!session?.user.id || session?.user.role !== "ADMIN"){
      redirect('/login')
    }
  const data = await getTurnosFijos();
 
  return (
    <div>
      <Titulo titulo='Listado de Turnos Fijos' />
      <div className='container mx-auto py-1 max-w-[800px]'>
        <DataTable columns={columns} data={data} BotonAgregar={TurnoFijoAgregar} />
      </div>
    </div>
  );
}

