import ClientesForm from '@/components/admin/crud/Clientes/ClientesForm'
import MensajeError from '@/components/admin/generales/MensajeError'
import Titulo from '@/components/admin/generales/Titulo'
import { getCliente } from './getDatos'





type Params = {
  params:Promise<{id:string}>
} 


export default async function ModificarClientePage({params}:Params) {

  const {id} = await params
  const cliente = await getCliente(id)

  return (
   <>
   <Titulo titulo='Modificar un cliente'/>
   <div className="className='container mx-auto py-1 max-w-[800px]">
    {
      cliente ? (
        <ClientesForm tarea='modificar' cliente={cliente}/>
      ) :(
        <MensajeError texto='Ese cliente no existe'/>
      )
    }


   </div>
   </>
  )
}
