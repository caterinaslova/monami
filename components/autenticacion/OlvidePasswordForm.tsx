"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "react-toastify"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { olvidePasswordAction } from "@/actions/usuarioAction"
import { useRouter } from "next/navigation"
import Link from "next/link"

const FormSchema = z.object({
  email: z.string().email({message:'Debe escribir un email válido'}),
})

export function OlvidePasswordForm() {

  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function datosForm(data: z.infer<typeof FormSchema>) {

    const respuestaAction = await olvidePasswordAction(data)

    if (respuestaAction.ok){
      toast.success('Revisa tu email para instrucciones')
      router.push('/login')
    }
    else{
      toast.error(respuestaAction.mensaje)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(datosForm)} className="w-full space-y-4 flex flex-col items-center">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel>Email:</FormLabel>
              <FormControl >
                <Input placeholder="correo@correo.com" {...field} />
              </FormControl>
              <FormDescription className="text-justify pt-5">
                Enviaremos a tu email un link para registrar una contraseña nueva.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer disabled:opacity-25" disabled={form.formState.isSubmitting}>{!form.formState.isSubmitting ? 'Enviar' : 'Enviando... Espere, por favor'}</Button>
        <Link href="/monamipadelsquash/reservas" className="w-full" > <Button type="button" variant={"outline"} className='cursor-pointer w-full'>Continuar sin loguearme</Button></Link>
      </form>
    </Form>
  )
}



