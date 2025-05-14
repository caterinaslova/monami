"use client"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { X } from "lucide-react"


export default function CerrarMenuSide() {
    const {toggleSidebar} = useSidebar()

  return (
    <div className=" md:hidden flex justify-end items-center pt-4">
        <Button variant="link" className="cursor-pointer" onClick={()=>toggleSidebar()}><X className="!w-6 !h-6"/></Button>
    </div>
  )
}
