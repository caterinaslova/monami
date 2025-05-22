"use client"

import { passwordMathSchema } from "@/lib/validaciones/passwordMatch"
import { passwordSchema } from "@/lib/validaciones/passwordSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {changePassword} from "@/actions/usuarioAction"


const formSchema = z.object({
  currentPassword:passwordSchema
}).and(passwordMathSchema)

export default function CambiarContrasenaForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      currentPassword:"",
      password:"",
      passwordConfirm:""
    }
  })
    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
     const response = await changePassword({
      currentPassword:data.currentPassword,
      password:data.password,
      passwordConfirm:data.passwordConfirm
     })
  

     };
  return (
           <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} >
              <fieldset disabled={form.formState.isSubmitting} className='flex flex-col gap-4'>
                <FormField
                  control={form.control}
                  name='currentPassword'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña actual</FormLabel>
                      <FormControl>
                        <Input {...field} type='text' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input {...field} type='text' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='passwordConfirm'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirme su contraseña </FormLabel>
                      <FormControl>
                        <Input {...field} type='text' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               <Button type="submit" className='mt-2 cursor-pointer'>Confirmar</Button>
              </fieldset>
           
            </form>
          </Form>
  )
}
