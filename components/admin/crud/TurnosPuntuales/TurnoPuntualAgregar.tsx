"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"



export default function TurnoPuntualAgregar() {

  return (
    <Link href="/admin/turnosPuntuales/agregar">  <Button variant="outline">Agregar</Button></Link>
  )
}
