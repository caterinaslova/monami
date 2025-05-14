"use server"

import { horariosPosibles, referenciaDia } from "@/lib/datos"
import prisma from "@/lib/prisma"
import { z } from "zod"
import { Mensajeria } from "./zz-tiposDatosGenerales"
import { DiaConLetras } from "@/lib/schemas"
import { revalidatePath } from "next/cache"


const TurnoPuntualForm =z.object({
    fecha:z.date(),
    clienteId: z
    .string()
    .min(2, { message: 'El cliente es obligatorio' }),
  cancha: z.enum(['Squash1','Squash2','Squash3','Padel1','Padel2','Asador1','Asador2']),
  dia:z.enum(['aLunes','bMartes','cMiércoles','dJueves','eViernes','fSábado','gDomingo']),
  horaComienzo: z.string().min(2),
  cantidadModulos: z.coerce.number(),
})

export const createTurnoPuntual = async (mensajeria:Mensajeria, formData:FormData)=>{

    const fechaRecibida= formData.get('fecha') as string

    const fechaDividida = fechaRecibida.split('-')

    const anio = Number(fechaDividida[2])
    const mes= Number(fechaDividida[1])-1
    const diaElegido= Number(fechaDividida[0])
 
    
    const fechaDate = new Date(anio,mes,diaElegido)

    const diaNumero = fechaDate.getDay()
  
    const diaReferenciado= DiaConLetras.parse(referenciaDia[diaNumero]) 

    const dataCruda = {
        clienteId:formData.get('clienteId') as string,
        cancha:formData.get('cancha') as string,
        horaComienzo:formData.get('horaComienzo') as string,
        cantidadModulos:formData.get('cantidadModulos') as string,
        fecha:fechaDate,
        dia:diaReferenciado
    }

    const dataValida = TurnoPuntualForm.safeParse(dataCruda)
    if(dataValida.error){
        const errors = dataValida.error.issues.map(error=>error.message)
        return{
            errors,
            exitoso:''
        }
    }
   
    const desde = Number(dataValida.data.horaComienzo)
    const hasta = desde + Number(dataValida.data.cantidadModulos)

    const modulosOcupados:string[] =[]

    for (let i=desde; i< hasta; i++){
       
        modulosOcupados.push(horariosPosibles[i].horarioComienzo) 
    }
   
 const horaFinaliza= horariosPosibles[hasta].horarioComienzo
 const horaComienzoString = horariosPosibles[desde].horarioComienzo

 const verificarOcupadoPuntual = await prisma.turnoPuntual.findFirst({
    where:{
        OR:[
            {
            AND:[
            {fecha:dataValida.data.fecha},
            {horaComienzo:dataValida.data.horaComienzo},
            {cancha:dataValida.data.cancha}
            ]
            },
            {
            AND:[
            {fecha:dataValida.data.fecha},
            {modulosOcupados:{has: horaComienzoString}},
            {cancha:dataValida.data.cancha}
            ]
            }
        ]

    }
 })
 if (verificarOcupadoPuntual){
        return{
        errors:['Ya hay un turno Puntual en ese horario, en esa cancha.'],
        exitoso:''
    }
 }

 const verificarOcupadoFijo = await prisma.turnoFijo.findFirst({
    where:{
        OR:[
            {
            AND:[
            {dia:diaReferenciado},
            {horaComienzo:dataValida.data.horaComienzo},
            {cancha:dataValida.data.cancha}
            ]
            },
            {
            AND:[
            {dia:diaReferenciado},
            {modulosOcupados:{has: horaComienzoString}},
            {cancha:dataValida.data.cancha}
            ]
            }
        ]

    }
 })
  if (verificarOcupadoFijo){
        return{
        errors:['Ya hay un turno Fijo en ese horario, en esa cancha.'],
        exitoso:''
    }
 }

    await prisma.turnoPuntual.create({data:{
        clienteId: dataValida.data.clienteId,
        fecha:new Date(dataValida.data.fecha),
        cancha:dataValida.data.cancha,
        dia:dataValida.data.dia,
        horaComienzo:dataValida.data.horaComienzo,
        cantidadModulos:dataValida.data.cantidadModulos,
        horaFinaliza,
        modulosOcupados,
        createdAt: new Date(),
      }})

    revalidatePath('/admin/turnosPuntuales')
    revalidatePath('/monamipadelsquah/reservas')
    return{
        errors:[],
        exitoso:'El turno fue registrado correctamente.'
    }
}

export const modificarTurnoPuntual = async (turnoFijoId:string,mensajeria:Mensajeria,formData:FormData)=>{


    console.log(formData)

    return{
        errors:[],
        exitoso:'El turno fue modificado correctamente.'
    }
}