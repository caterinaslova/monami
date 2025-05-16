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

  const getHorariosPosibles = async ()=>{
    const horariosPosibles = await prisma.horarioPosible.findMany({
      where:{abierto:true}
    })
    return horariosPosibles
  }

export default async function AgregarTurnoFijo() {
     const clientesSelect = await getClientesParaSelect()
     const horariosPosibles = await getHorariosPosibles()
  return (
    <div>
        <Titulo titulo='Agregar turno Fijo'/>
        <div className="max-w-[900px] mx-auto">
           <TurnoPuntualForm   clientesSelect={clientesSelect} horariosPosibles={horariosPosibles}/>
        </div>
    </div>
  )
}
