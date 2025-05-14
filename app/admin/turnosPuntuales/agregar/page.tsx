import TurnoPuntualForm from '@/components/admin//crud/TurnosPuntuales/TurnoPuntualForm'
import Titulo from '@/components/admin/generales/Titulo'
import prisma from '@/lib/prisma'


const getClientesParaSelect = async ()=>{
    const clientes = await prisma.cliente.findMany({})
  
    const datosSelect = clientes.map(cliente=>{
      return{
        label:cliente.nombre,
        value:cliente.id
      }
    })
    return datosSelect
  }

export default async function AgregarTurnoFijo() {
     const clientesSelect = await getClientesParaSelect()
  return (
    <div>
        <Titulo titulo='Agregar turno Fijo'/>
        <div className="max-w-[900px] mx-auto">
           <TurnoPuntualForm   clientesSelect={clientesSelect}/>
        </div>
    </div>
  )
}
