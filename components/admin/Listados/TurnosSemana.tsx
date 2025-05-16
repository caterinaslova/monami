"use client"
import { TurnoFijoType, TurnoPuntualType } from '@/lib/types'
import { useState } from 'react'
import ListarOcupados from './ListarOcupados'
import { SeleccionarFechaForm } from './SeleccionarFecha'
import { HorarioPosible } from '@/lib/generated/prisma'
import { diasOrdenados } from '@/lib/datos'
import ReferenciaOcupados from './ReferenciaOcupados'


const hoy = new Date()
hoy.setHours(0,0,0,)

type TurnosSemanaProps={
  turnosPuntuales:TurnoPuntualType[];
  turnosFijos:TurnoFijoType[];
  horario:HorarioPosible[]
  conNombre:boolean
}

export default function TurnosSemana({turnosPuntuales,turnosFijos,horario,conNombre}:TurnosSemanaProps) {
    const [fecha,setFecha]= useState(hoy)

    const diaNumero = fecha.getDay()
    const diaElegido = diasOrdenados[diaNumero]
   
    const horarioDeEseDia = horario.filter(item=>item.dia===diaElegido)

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <SeleccionarFechaForm fecha={fecha} setFecha={setFecha}/>
        <ReferenciaOcupados/>
      </div>
      <ListarOcupados fecha={fecha} turnosPuntuales={turnosPuntuales} turnosFijos={turnosFijos} horarioDeEseDia={horarioDeEseDia} conNombre={conNombre}/>

    </div>
  )
}