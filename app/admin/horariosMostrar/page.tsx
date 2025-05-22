
import { auth } from "@/auth";
import FiltrarPorDia from "@/components/admin/crud/Horarios/FiltrarPorDia";
import HorariosList from "@/components/admin/crud/Horarios/HorariosList";
import Titulo from "@/components/admin/generales/Titulo";
import { diasOrdenados } from "@/lib/datos";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

type SearchParams= Promise<{dia:string}>

const getHorarios=async (dia:string)=>{

  let diaElegido =dia
  if (!diasOrdenados.includes(diaElegido)){
          diaElegido="aLunes"
  }

  const horarios = await prisma.horarioPosible.findMany({
    where:{ dia:diaElegido},
    orderBy:[
      {horarioComienzo:'asc'}
    ]
  })
  return horarios
}

export default async function HorariosPage({searchParams}:{searchParams:SearchParams}) {
    const session = await auth()
    if (!session?.user.id || session?.user.role !== "ADMIN"){
      redirect('/login')
    }

  const {dia="aLunes"}= await searchParams

 
 const horariosDeEseDia = await getHorarios(dia)
  return (
    <div>
      <Titulo titulo={"Horarios del club"}/>
      <div className="flex flex-col justify-center items-center space-y-3">
        <FiltrarPorDia/>
        <HorariosList horariosDeEseDia={horariosDeEseDia} tarea="mostrar"/>
      </div>
   
    </div>
  )
}
