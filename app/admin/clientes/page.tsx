import Titulo from '@/components/admin/generales/Titulo';
import prisma from '@/lib/prisma';
import { columns } from './columns';
import { DataTable } from '../../../components/admin/crud/generales/data-table';
import ClientesAgregar from '@/components/admin/crud/Clientes/ClientesAgregar';

const getClientes = async () => {
  const datos = await prisma.cliente.findMany({
    orderBy:{
      createdAt:'desc'
    }
  });
  return datos;
};

export default async function ClientesPage() {
  const data = await getClientes();

  return (
    <div>
      <Titulo titulo='Listado de Clientes' />
      <div className='container mx-auto py-1 max-w-[800px]'>
        <DataTable columns={columns} data={data} BotonAgregar={ClientesAgregar} />
      </div>
    </div>
  );
}
