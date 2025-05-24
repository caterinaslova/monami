'use server';


import prisma from '@/lib/prisma';
import { z } from 'zod';
import { Mensajeria } from './zz-tiposDatosGenerales';
import { format } from 'date-fns';
import { revalidatePath } from 'next/cache';

const TurnoFijoForm = z.object({
  clienteId: z.string().min(2, { message: 'El cliente es obligatorio' }),
  cancha: z.enum([
    'Squash1',
    'Squash2',
    'Squash3',
    'Padel1',
    'Padel2',
    'Asador1',
    'Asador2',
  ]),
  dia: z.enum([
    'aLunes',
    'bMartes',
    'cMiércoles',
    'dJueves',
    'eViernes',
    'fSábado',
    'gDomingo',
  ]),
  horaComienzo: z.string().min(2),
  cantidadModulos: z.coerce.number(),
});

export const createTurnoFijo = async (
  mensajeria: Mensajeria,
  formData: FormData
) => {
  const dataCruda = Object.fromEntries(formData);
  const dataValida = TurnoFijoForm.safeParse(dataCruda);
  if (dataValida.error) {
    const errors = dataValida.error.issues.map((error) => error.message);
    return {
      errors,
      exitoso: '',
    };
  }
  const horariosPosibles = await prisma.horarioPosible.findMany({where:{dia:dataValida.data.dia},orderBy:{horarioComienzo:'asc'}})
  const desde = horariosPosibles.findIndex(item=>item.id===dataValida.data.horaComienzo)
  const hasta = desde + Number(dataValida.data.cantidadModulos);
  if (hasta> horariosPosibles.length){
        return {
      errors:['Los horarios elegidos superan los horarios abiertos de este día'],
      exitoso: '',
    };
  }

   const horaComienzoString = horariosPosibles[desde].horarioComienzo

  const modulosOcupados: string[] = [];

  for (let i = desde; i < hasta; i++) {
    modulosOcupados.push(horariosPosibles[i].horarioComienzo);
  }
 
const cerrados = modulosOcupados
  .map(item => horariosPosibles.find(horario => horario.horarioComienzo === item))
  .filter(horario => horario && !horario.abierto);

   if (cerrados.length>0){
            return{
        errors:['Ha elegido horarios cerrados. debe abrirlo primero.'],
        exitoso:''
    }
   }
 let horaFinaliza=""
if (hasta < horariosPosibles.length){

    horaFinaliza= horariosPosibles[hasta].horarioComienzo
}else{
    horaFinaliza="24:00"
}
 

  const verificarOcupadoFijo = await prisma.turnoFijo.findFirst({
    where:{
        OR:[
            {
            AND:[
            {dia:dataValida.data.dia},
            {horaComienzo:dataValida.data.horaComienzo},
            {cancha:dataValida.data.cancha}
            ]
            },
            {
            AND:[
            {dia:dataValida.data.dia},
            {modulosOcupados:{hasSome: modulosOcupados}},
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


   const verificarOcupadoPuntual = await prisma.turnoPuntual.findFirst({
    where:{
        OR:[
            {
            AND:[
            {dia:dataValida.data.dia},
            {horaComienzo:dataValida.data.horaComienzo},
            {cancha:dataValida.data.cancha}
            ]
            },
            {
            AND:[
            {dia:dataValida.data.dia},
            {modulosOcupados:{hasSome: modulosOcupados}},
            {cancha:dataValida.data.cancha}
            ]
            }
        ]

    }
 })
 if (verificarOcupadoPuntual){
        return{
        errors:[`Ya hay un turno Puntual en ese horario en esa cancha, el día ${format(verificarOcupadoPuntual.fecha,'dd-MM-yyyy')}.`],
        exitoso:''
    }
 }
const verificarOcupadoAuto = await prisma.turnoRegistradoPorCliente.findFirst({
    where:{
        OR:[
            {
            AND:[
            {dia:dataValida.data.dia},
            {horaComienzo:dataValida.data.horaComienzo},
            {cancha:dataValida.data.cancha}
            ]
            },
            {
            AND:[
            {dia:dataValida.data.dia},
            {modulosOcupados:{hasSome: modulosOcupados}},
            {cancha:dataValida.data.cancha}
            ]
            }
        ]

    }
 })

 if (verificarOcupadoAuto){
        return{
        errors:['Ya hay un turno Autoregistrado en ese horario, en ese dia, en esa cancha.'],
        exitoso:''
    }
 }
 

  await prisma.turnoFijo.create({
    data: {
      clienteId: dataValida.data.clienteId,
      cancha: dataValida.data.cancha,
      dia: dataValida.data.dia,
      horaComienzo: horaComienzoString,
      cantidadModulos: dataValida.data.cantidadModulos,
      horaFinaliza,
      modulosOcupados,
      createdAt: new Date(),
    },
  });
// falta verificar que no superen los turnos finales del día
// y que los que se cargan sean correlativos
// y que ninguno de los modulos est+e coupado

  return {
    errors: [],
    exitoso: 'El turno fue registrado correctamente.',
  };
};

export const eliminarTurnoFijo = async (
  turnoFijoId: string,
  mensajeria: Mensajeria,
 
) => {
try {
    await prisma.turnoFijo.delete({where:{id:turnoFijoId}})
    revalidatePath('/admin/turnosFijos')
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
export const modificarTurnoFijo = async (
  turnoFijoId: string,
  mensajeria: Mensajeria,
  formData:FormData
) => {
try {
   console.log(formData)
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
