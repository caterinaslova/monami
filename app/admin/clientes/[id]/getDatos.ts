import prisma from "@/lib/prisma"
import { esValidoElId } from "@/lib/validaciones/validarObjectId"

 export const getCliente = async (clienteId:string)=>{
    const idValido = esValidoElId(clienteId)
  
    if (idValido){
      const datos = await prisma.cliente.findFirst({where:{id:clienteId}})
      if(!datos){
        return null
      }
      
      return datos
    }
    return null
  }