"use server"
import prisma from "@/lib/prisma";
import { Mensajeria } from "./zz-tiposDatosGenerales";
import { revalidatePath } from "next/cache";
import { DiaConLetras } from "@/lib/schemas";
import { referenciaDia } from "@/lib/datos";
import { z } from "zod";
import { auth } from "@/auth";



const TurnoGeneralForm =z.object({
    fecha:z.date(),
    usuarioId: z
    .string()
    .min(2, { message: 'El cliente es obligatorio' }),
  cancha: z.enum(['Squash1','Squash2','Squash3','Padel1','Padel2','Asador1','Asador2']),
  dia:z.enum(['aLunes','bMartes','cMiércoles','dJueves','eViernes','fSábado','gDomingo']),
  horaComienzo: z.string().min(2),
  cantidadModulos: z.coerce.number(),
})

const zona = "America/Argentina/Buenos_Aires"

export const createTurnoGeneral = async (mensajeria:Mensajeria,formData:FormData)=>{
   
   
    const clienteId = formData.get('clienteId')

    if(!clienteId || clienteId===""){
       
        return{
            errors:['Debe estar logueado para reservar.'],
            exitoso:''
        }
    }
    

    const fechaRecibida= formData.get('fecha') as string
   

    const fechaDividida = fechaRecibida.split('-')

    const anio = Number(fechaDividida[2])
    const mes= Number(fechaDividida[1])-1
    const diaElegido= Number(fechaDividida[0])
 
    
    const fechaDate = new Date(anio,mes,diaElegido)
    fechaDate.setUTCHours(fechaDate.getUTCHours() + 3)
  


    const diaNumero = fechaDate.getDay()

    const diaReferenciado= DiaConLetras.parse(referenciaDia[diaNumero]) 


    const horariosPosibles = await prisma.horarioPosible.findMany({where:{AND:[{dia:diaReferenciado}]},orderBy:[
     {horarioComienzo:'asc'}
    ]})
 
    const dataCruda = {
        usuarioId:formData.get('clienteId') as string,
        cancha:formData.get('cancha') as string,
        horaComienzo:formData.get('horaComienzo') as string,
        cantidadModulos:formData.get('cantidadModulos') as string,
        fecha:fechaDate,
        dia:diaReferenciado
    }

    const dataValida = TurnoGeneralForm.safeParse(dataCruda)
    if(dataValida.error){
        const errors = dataValida.error.issues.map(error=>error.message)
    
        return{
            errors,
            exitoso:''
        }
    }
 

    const desde = horariosPosibles.findIndex(item=>item.horarioComienzo===dataValida.data.horaComienzo)
  
   const hasta = desde + Number(dataValida.data.cantidadModulos)

     if (hasta> horariosPosibles.length){
     
        return {
      errors:['Los horarios elegidos superan los horarios abiertos de este día.'],
      exitoso: '',
    };
  }
  const modulosOcupados:string[] =[]

    for (let i=desde; i< hasta; i++){

        if(!horariosPosibles[i]){
            return{
                errors:['Eligió un turno cerrado.'],
                 exitoso:''
            }
        }
       
        modulosOcupados.push(horariosPosibles[i].horarioComienzo) 
    }
console.log('modulos ocupados',modulosOcupados)
 const cerrados = modulosOcupados
  .map(item => horariosPosibles.find(horario => horario.horarioComienzo === item))
  .filter(horario => horario && !horario.abierto);

  console.log('modulos cerrados',cerrados)
   if (cerrados.length>0){
            return{
        errors:['Ha elegido horarios cerrados.'],
        exitoso:''
    }
   }
let horaFinaliza=""
if (hasta < horariosPosibles.length){

    horaFinaliza= horariosPosibles[hasta].horarioComienzo
}else{
    horaFinaliza="24:00"
}
 

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
            {modulosOcupados:{hasSome: modulosOcupados}},
            {cancha:dataValida.data.cancha}
            ]
            }
        ]

    }
 })

 if (verificarOcupadoPuntual){
        return{
        errors:['Ya hay un turno  en ese horario, en esa cancha.'],
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
            {modulosOcupados:{hasSome: modulosOcupados}},
            {cancha:dataValida.data.cancha}
            ]
            }
        ]

    }
 })

  if (verificarOcupadoFijo){
        return{
        errors:['Ya hay un turno  en ese horario, en esa cancha.'],
        exitoso:''
    }
 }
  const verificarOcupadoAuto = await prisma.turnoRegistradoPorCliente.findFirst({
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
            {modulosOcupados:{hasSome: modulosOcupados}},
            {cancha:dataValida.data.cancha}
            ]
            }
        ]

    }
 })

 if (verificarOcupadoAuto){
        return{
        errors:['Ya hay un turno en ese horario, en esa cancha.'],
        exitoso:''
    }
 }

 await prisma.turnoRegistradoPorCliente.create({data:{
        usuarioId: dataValida.data.usuarioId,
        fecha:new Date(dataValida.data.fecha),
        cancha:dataValida.data.cancha,
        dia:dataValida.data.dia,
        horaComienzo:horariosPosibles[desde].horarioComienzo,
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


export const eliminarTurnoAuto = async (
  turnoFijoId: string,
  mensajeria: Mensajeria,
 
) => {
try {
    const turno = await prisma.turnoRegistradoPorCliente.findFirst({where:{id:turnoFijoId}})
    if (!turno){
          return {
            errors: [],
            exitoso: 'No existe el turno.',
            };
    }
    const session = await auth()
    if (session?.user.id && session.user.role==="ADMIN"){

        await prisma.turnoRegistradoPorCliente.delete({where:{id:turnoFijoId}})
    }
    if (session?.user.id && session.user.id==turno.usuarioId){

        

        // Fecha actual (UTC) y compensar +3 horas
        const ahora = new Date();
        ahora.setHours(ahora.getHours() + 3); // compensar la diferencia horaria

        // Convertir el turno a Date
        const fechaTurno = new Date(turno.fecha);

        // Calcular diferencia en milisegundos
        const diferenciaMs = fechaTurno.getTime() - ahora.getTime();

        // Convertir a horas
        const diferenciaHoras = diferenciaMs / (1000 * 60 * 60);

        // Verificar si faltan al menos 24 horas
        if (diferenciaHoras < 24) {
            return { 
                  errors: ['El turno debe reservarse con al menos 24 horas de anticipación.'],
                exitoso: 'El turno fue eliminado correctamente.',
             };
        }

        await prisma.turnoRegistradoPorCliente.delete({where:{id:turnoFijoId}})
    }
    revalidatePath('/admin/turnosAuto')
    revalidatePath('/admin')
    revalidatePath('/monamipadelsquash/reservas')
  return {
    errors: [],
    exitoso: 'El turno fue eliminado correctamente.',
  };
} catch (error) {
  return {
    errors: [],
    exitoso: 'No se pudo eliminar.',
  };
}
};