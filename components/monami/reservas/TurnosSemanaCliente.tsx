"use client"
import { TurnoFijoType, TurnoPuntualType } from '@/lib/types'
import { useState } from 'react'


import { HorarioPosible, TurnoRegistradoPorCliente } from '@/lib/generated/prisma'
import { diasOrdenados } from '@/lib/datos'

import ListarOcupadosCliente from './ListarOcupadosCliente'
import { SeleccionarFechaForm } from '@/components/admin/Listados/SeleccionarFecha'
import ReferenciaOcupados from '@/components/admin/Listados/ReferenciaOcupados'


const hoy = new Date()
hoy.setHours(0,0,0,)

type TurnosSemanaProps={
  turnosPuntuales:TurnoPuntualType[];
  turnosFijos:TurnoFijoType[];
  turnosAutoRegistrados:TurnoRegistradoPorCliente[]
  horario:HorarioPosible[]
  email?: string | null
  userId?:string | null

}

// aca viene solo el horario abierto

export default function TurnosSemanaCliente({turnosPuntuales,turnosFijos,turnosAutoRegistrados,horario,email,userId}:TurnosSemanaProps) {
    const [fecha,setFecha]= useState(hoy)

    const diaNumero = fecha.getDay()
    const diaElegido = diasOrdenados[diaNumero]
   
    const horarioDeEseDia = horario.filter(item=>item.dia===diaElegido)
    // horario de ese dia es el horario abierto - solo del día de la fecha
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <SeleccionarFechaForm fecha={fecha} setFecha={setFecha}/>
        <ReferenciaOcupados/>
      </div>
      <ListarOcupadosCliente fecha={fecha} turnosPuntuales={turnosPuntuales} turnosFijos={turnosFijos} horarioDeEseDia={horarioDeEseDia} email={email} userId={userId} turnosAutoRegistrados={turnosAutoRegistrados}/>

    </div>
  )
}