import prisma from "@/lib/prisma"

export const getTurnosPuntuales= async (fecha:Date)=>{

    const datos = await prisma.turnoPuntual.findMany({
      where:{
        fecha
      }
    })
  
    console.log(datos)
    return datos
   }