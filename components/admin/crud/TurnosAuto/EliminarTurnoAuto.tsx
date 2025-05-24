import { eliminarTurnoAuto } from '@/actions/createTurnoGeneralAction'
import { useActionState } from 'react'

export default function EliminarTurnoAuto({turnoId}:{turnoId:string}) {
    const [mensaje,enviarDatos]= useActionState(eliminarTurnoAuto.bind(null,turnoId),{
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
