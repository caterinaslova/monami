import ClientesForm from '@/components/admin/crud/Clientes/ClientesForm'
import MensajeError from '@/components/admin/generales/MensajeError'
import Titulo from '@/components/admin/generales/Titulo'
import { getCliente } from '../getDatos'






type Params = {
  params:Promise<{id:string}>
} 


export default async function VerClientePage({params}:Params) {

  const {id} = await params
  const cliente = await getCliente(id)
  console.log(cliente)
  return (
   <>
   <Titulo titulo='Ver un cliente'/>
   <div className="className='container mx-auto py-1 max-w-[800px]">
    {
      cliente ? (
        <ClientesForm tarea='ver' cliente={cliente}/>
      ) :(
        <MensajeError texto='Ese cliente no existe'/>
      )
    }


   </div>
   </>
  )
}
