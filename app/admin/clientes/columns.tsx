"use client"

import EliminarCliente from "@/components/admin/crud/Clientes/EliminarCliente"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cliente = {
  id: string
  nombre: string
  telefono: string
  email: string
}

export const columns: ColumnDef<Cliente>[] = [
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
    accessorKey: "nombre",
    header: ({ column }) => {
        return (
            <div className="text-center font-bold tracking-wide">
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <p>Nombre</p>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        )
      },
    cell:({row})=>{
        const nombre =row.getValue("nombre") as string
        return <div className="text-center capitalize">{nombre}</div>
    }
  },
  {
    accessorKey: "telefono",
    header: ()=><div  className="text-center font-bold tracking-wide">Teléfono</div>,
    
    cell:({row})=>{
        const telefono =row.getValue("telefono") as string
        return <div className="text-center">{telefono}</div>
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
        return (
            <div className="hidden md:table-cell text-center font-bold tracking-wide">
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
                >
                    <p>Email</p>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        )
      },
    cell:({row})=>{
        const email =row.getValue("email") as string
        return <div className="hidden md:table-cell text-center lowercase">{email}</div>
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
            <DropdownMenuItem className=" w-full flex justify-start items-center px-4"><Link href={`/admin/clientes/${cliente.id}/ver`}>Ver</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full flex justify-start items-center px-4"><Link href={`/admin/clientes/${cliente.id}`}>Modificar</Link></DropdownMenuItem>
            <DropdownMenuItem><EliminarCliente clienteId={cliente.id}/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

]
