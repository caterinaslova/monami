import { eliminarCliente } from '@/actions/clientesAction'
import { useActionState } from 'react'

export default function EliminarCliente({clienteId}:{clienteId:string}) {
    const [mensaje,enviarDatos]= useActionState(eliminarCliente.bind(null,clienteId),{
        errors:[],
        exitoso:""
    })
  return (
    <form action={enviarDatos}  >
          <input type="submit" value="Eliminar" className='text-red-600 px-2 cursor-pointer'/>
        {/* <Button type="submit" className='text-red-600 px-3 cursor-pointer' variant={"link"}>Eliminar</Button> */}
    </form>
  )
}
