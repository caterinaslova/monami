"use server"

import prisma from "@/lib/prisma"
import { Mensajeria } from "./zz-tiposDatosGenerales"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const Abierto = z.string()
const DiaSchema = z.enum([  "aLunes", "bMartes", "cMiércoles","dJueves",  "eViernes", "fSábado",  "gDomingo"])

export const createHorario = async(horarioId:string,mensajeria:Mensajeria,formData:FormData)=>{

    try {
        const abierto = formData.get('abierto')
        const campoAxiliar = formData.get('campoAuxiliar')
 
        const abiertoValidado = Abierto.safeParse(campoAxiliar)
       
        
        if (!abiertoValidado.success){
            const errors = abiertoValidado.error.issues.map(error=>error.message)
            
                return{
            errors,
            exitoso:''
        }
        }
        let abiertoBoolean = abiertoValidado.data==="on" ? true :false

        const horarioAmodificar = await prisma.horarioPosible.findFirst({where:{id:horarioId}})

        const diaBuscado = DiaSchema.parse(horarioAmodificar?.dia)

  

        if (!abiertoBoolean && horarioAmodificar){
           
            const existeHorario = await prisma.turnoFijo.findFirst({where:{AND:[{dia:diaBuscado},{modulosOcupados:{has:horarioAmodificar.horarioComienzo}}]}})
            if (existeHorario){
                revalidatePath(`/admin/horarios?dia=${diaBuscado}`)
                 return{
                    errors:['Existe un turno fijo con ese horario'],
                    exitoso:''
                }
            }
            const existeHorarioPuntual = await prisma.turnoPuntual.findFirst({where:{AND:[{dia:diaBuscado},{modulosOcupados:{has:horarioAmodificar.horarioComienzo}}]}})
            if (existeHorarioPuntual){
                revalidatePath(`/admin/horarios?dia=${diaBuscado}`)
                 return{
                    errors:['Existe un turno  puntual con ese horario'],
                    exitoso:''
                }
            }
        }


         
        await prisma.horarioPosible.update({where:{id:horarioId},data:{abierto:abiertoBoolean}})
        revalidatePath('/admin/horarios')
        return{
            errors:[],
            exitoso:'Registrado'
        }
        
    } catch (error) {
      
        return{
            errors:['Hubo un error en el try'],
            exitoso:''
        }
        
    }


}