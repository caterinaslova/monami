import { eliminarTurnoAuto } from '@/actions/createTurnoGeneralAction'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function EliminarTurnoAuto({turnoId}:{turnoId:string}) {

  const router=useRouter()
 
    const [mensaje,enviarDatos]= useActionState(eliminarTurnoAuto.bind(null,turnoId),{
        errors:[],
        exitoso:""
    })
     useEffect(()=>{
      if (mensaje.errors.length){
        toast.error(mensaje.errors[0])
      }
      router.push('/monamipadelsquash/misreservas')
     },[
      mensaje
     ])
  return (
    <form action={enviarDatos}  >
          <input type="submit" value="Eliminar" className='text-red-600 px-2 cursor-pointer'/>
        {/* <Button type="submit" className='text-red-600 px-3 cursor-pointer' variant={"link"}>Eliminar</Button> */}
    </form>
  )
}
