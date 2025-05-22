"use client"

import EliminarCliente from "@/components/admin/crud/Clientes/EliminarCliente"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TurnoFijoType= {
  id:string
  clienteId:string
  dia:string
  horaComienzo:string
  cantidadModulos:number
  cliente:{
    id:string;
    nombre:string;
  }
  createdAt:Date
  updatedAt:Date
 }

export const columns: ColumnDef<TurnoFijoType>[] = [
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
        return (
            <div className="hidden md:table-cell text-center font-bold tracking-wide max-w-6">
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <p>Alta</p>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        )
      },
    cell:({row})=>{
        const createAt =row.getValue("createdAt") as string
        return <div className="hidden md:table-cell text-center max-w-6">{format (createAt,"dd-MM-yyyy")}</div>
    }
  },
  {
    accessorKey: "cliente.nombre",
    header: ({ column }) => {
        return (
            <div className="text-center font-bold tracking-wide">
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <p>Cliente</p>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        )
      },
    cell:({row})=>{
        const cliente =row.original.cliente?.nombre ?? "Sin cliente"
      
        return <div className="text-center capitalize">{cliente}</div>
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
    accessorKey: "dia",
    header: ({ column }) => {
        return (
            <div className="text-center font-bold tracking-wide">
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <p>Día</p>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        )
      },
    
    cell:({row})=>{
        const dia =row.getValue("dia") as string
        return <div className="text-center">{dia.slice(1)}</div>
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
      const cliente = row.original
 
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
            <DropdownMenuItem className=" w-full flex justify-start items-center px-4"><Link href={`/admin/turnoFijos/${cliente.id}/ver`}>Ver</Link>
            </DropdownMenuItem>

            <DropdownMenuItem><EliminarCliente clienteId={cliente.id}/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

]
