"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { es } from "date-fns/locale/es"

const FormSchema = z.object({
  fecha: z.date({
    required_error: "Seleccione una fecha.",
  }),
})

const hoy = new Date()
hoy.setHours(0,0,0,0)

export function SeleccionarFechaForm({fecha,setFecha}:{fecha:Date,setFecha:React.Dispatch<React.SetStateAction<Date>>}) {

  const [open,setOpen]= useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues:{
      fecha:fecha || hoy
    }
  })
 

  return (
    <Form {...form}>
      <form  className="flex gap-2 justify-center items-center">
        <FormField
          control={form.control}
          name="fecha"
          render={({ field }) => (
            <FormItem className="flex flex-col">
             
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                       format(fecha, "EEEE, dd-MM-yyyy", { locale: es })
                      ) : (
                        <span>Selecciona un día</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    locale={es}
                    onSelect={(date=hoy)=>{
                      setFecha(date!)
                      field.onChange(date)
                      setOpen(false)
                    }
                     }
                    disabled={(date) =>
                      date < hoy
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

      </form>
    </Form>
  )
}
