"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"



export default function TurnoFijoAgregar() {

  return (
    <Link href="/admin/turnosFijos/agregar">  <Button variant="outline">Agregar</Button></Link>
  )
}
