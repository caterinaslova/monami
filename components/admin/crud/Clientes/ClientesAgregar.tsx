"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { useState } from "react"
import ClientesForm from "./ClientesForm"

export default function ClientesAgregar() {
      const [openModalCreate,setOpenModalCreate]=useState(false)
  return (
    <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
      <DialogTrigger asChild>
        <Button variant="outline">Agregar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px]">
        <DialogHeader>
          <DialogTitle>Agregar Cliente</DialogTitle>
          <DialogDescription>
            Escribe los datos del nuevo cliente.
          </DialogDescription>
        </DialogHeader>
        <ClientesForm cerrarModal={setOpenModalCreate} tarea='agregar'/>
      </DialogContent>
    </Dialog>
  )
}
