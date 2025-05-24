"use client"
import EliminarTurnoAuto from "@/components/admin/crud/TurnosAuto/EliminarTurnoAuto";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TurnoAutoRegistradoType= {
  id:string
  usuarioId:string
  dia:string
  horaComienzo:string
  cantidadModulos:number
  createdAt:Date
  updatedAt:Date
 }

export const columns: ColumnDef<TurnoAutoRegistradoType>[] = [
  {
    accessorKey: "fecha",
    header: ({ column }) => {
        return (
            <div className=" text-center font-bold tracking-wide ">
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <p>Fecha</p>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        )
      },
    cell:({row})=>{
        const fecha =row.getValue("fecha") as string
        return <div className=" text-center ">{format(fecha, "EEEE, dd-MM-yyyy", { locale: es })}</div>
    }
  },

  {
    accessorKey: "cancha",
        header: ({ column }) => {
        return (
            <div className="text-center font-bold tracking-wide">
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <p>Cancha</p>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        )
      },
    
    cell:({row})=>{
        const cancha =row.getValue("cancha") as string
        return <div className="text-center">{cancha}</div>
    }
  },

  {
    accessorKey: "horaComienzo",
    header: ({ column }) => {
        return (
            <div className=" text-center font-bold tracking-wide">
                    <p>Desde</p>
            </div>
        )
      },
    cell:({row})=>{
        const horaComienzo =row.getValue("horaComienzo") as number
            return <div className=" text-center">{horaComienzo}</div>
    }
  },
  {
    accessorKey: "horaFinaliza",
    header: ({ column }) => {
        return (
            <div className="text-center font-bold tracking-wide">
                    <p>Hasta</p>
          </div>
        )
      },
    cell:({row})=>{
      const horaFinaliza =row.getValue("horaFinaliza") as Array<string>
      return <div className=" text-center ">{horaFinaliza}</div>
    }
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const turno = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel className="flex justify-center items-center font-bold">Acciones</DropdownMenuLabel> */}
            <DropdownMenuItem className=" w-full flex justify-start items-center px-4"><Link href={`/admin/turnoFijos/${turno.id}/ver`}>Ver</Link>
            </DropdownMenuItem>

            <DropdownMenuItem><EliminarTurnoAuto turnoId={turno.id}/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

]
