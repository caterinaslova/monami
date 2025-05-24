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
import { useRouter } from "next/navigation"
import { modificarPasswordAction } from "@/actions/usuarioAction"
import validaPass from "@/lib/validaciones/validarPassword"

const FormSchema = z.object({
  password: z.string().min(8,{message:'La contraseña debe tener al menos 8 caracteres'}).max(12,{message:"La password no puede tener más de 12 caracteres"}).refine(data=>validaPass(data),{message:'La contraseña debe tener al menos 8 caracteres. Una mayúscula. Una minúscula. Un número'}),
  passwordConfirm:z.string()
}).refine(data=>data.password===data.passwordConfirm,{message:'Las contraseñas deben ser iguales',path:['passwordConfirm']})

export  function NuevaPasswordForm({token}:{token:string}) {

  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      passwordConfirm:''
    },
  })

  async function dataDelForm(data: z.infer<typeof FormSchema>) {

        const respuestaAction = await modificarPasswordAction(data,token)
    
        if (respuestaAction.ok){
          toast.success('Contraseña modificada')
          router.push('/login')
        }
        else{
          toast.error(respuestaAction.mensaje)
        }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(dataDelForm)} className="w-full space-y-10 flex flex-col items-center">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel>Contraseña:</FormLabel>
              <FormControl >
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription className="text-justify pt-1">
                Escribe una nueva contraseña de al menos 8 caracteres que contenga mayúsculas, minúsculas y números.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
               <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel>Confirma la contraseña:</FormLabel>
              <FormControl >
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription className="text-justify pt-1">
                Escribe la misma contraseña para verificar que recuerdas lo que escribiste.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full disabled:opacity-25" disabled={form.formState.isSubmitting}>{!form.formState.isSubmitting ? 'Enviar' : 'Enviando... Aguarda, por favor'}</Button>
      </form>
    </Form>
  )
}



function nuevaPasswordAction(data: { password: string; passwordConfirm: string }) {
  throw new Error("Function not implemented.")
}

