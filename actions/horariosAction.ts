"use server"

import prisma from "@/lib/prisma"
import { Mensajeria } from "./zz-tiposDatosGenerales"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const Abierto = z.string()

export const createHorario = async(horarioId:string,mensajeria:Mensajeria,formData:FormData)=>{

    try {
        const abierto = formData.get('abierto')
        const campoAxiliar = formData.get('campoAuxiliar')
        console.log('abiertocrudo',abierto)
        console.log('campoAuxiliar',campoAxiliar)
        const abiertoValidado = Abierto.safeParse(campoAxiliar)
        console.log(abiertoValidado.data)
        
        if (!abiertoValidado.success){
            const errors = abiertoValidado.error.issues.map(error=>error.message)
            console.log(errors)
                return{
            errors,
            exitoso:''
        }
        }
        let abiertoBoolean = abiertoValidado.data==="on" ? true :false
         
        await prisma.horarioPosible.update({where:{id:horarioId},data:{abierto:abiertoBoolean}})
        revalidatePath('/admin/horarios')
        return{
            errors:[],
            exitoso:'Registrado'
        }
        
    } catch (error) {
        console.log(error)
        return{
            errors:['Hubo un error en el try'],
            exitoso:''
        }
        
    }


}