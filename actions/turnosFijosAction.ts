'use server';

import { horariosPosibles } from '@/lib/datos';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import { Mensajeria } from './zz-tiposDatosGenerales';
import { format } from 'date-fns';

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

  const desde = Number(dataValida.data.horaComienzo);
  const hasta = desde + Number(dataValida.data.cantidadModulos);

   const horaComienzoString = horariosPosibles[desde].horarioComienzo

  const modulosOcupados: string[] = [];

  for (let i = desde; i < hasta; i++) {
    modulosOcupados.push(horariosPosibles[i].horarioComienzo);
  }
  const horaFinaliza= horariosPosibles[hasta].horarioComienzo

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
            {modulosOcupados:{has: horaComienzoString}},
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

 

  await prisma.turnoFijo.create({
    data: {
      clienteId: dataValida.data.clienteId,
      cancha: dataValida.data.cancha,
      dia: dataValida.data.dia,
      horaComienzo: dataValida.data.horaComienzo,
      cantidadModulos: dataValida.data.cantidadModulos,
      horaFinaliza,
      modulosOcupados,
      createdAt: new Date(),
    },
  });
  // antes de dar de alta verificar que no se repita en este mismo archivo
  // día y hora
  // verificar que no haya turnos asignados en el de turnos generales que todavia no hice

  return {
    errors: [],
    exitoso: 'El turno fue registrado correctamente.',
  };
};

export const modificarTurnoFijo = async (
  turnoFijoId: string,
  mensajeria: Mensajeria,
  formData: FormData
) => {
  console.log(formData);

  return {
    errors: [],
    exitoso: 'El turno fue modificado correctamente.',
  };
};
