"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from 'react-toastify'
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { confirmAccountAction } from "@/actions/confirm-account-action"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
  token: z.string().min(6, {
    message: "Tu clave debe tener 6 dígitos.",
  }),
})

export function ConfirmAccountForm() {

  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token: "",
    },
  })

  async function onSubmit (data: z.infer<typeof FormSchema>) {

    const respuesta = await  confirmAccountAction(data)
    if (respuesta.success ==='ok'){

      toast('Email verificado correctamente')
      router.push('/login')
    }else{
      toast('La clave es incorrecta')
    }
    }

  return (
   

        <Form {...form} >
          <form   onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-10 flex flex-col items-center">
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center space-y-6">
                  <FormLabel>Clave válida solo una vez</FormLabel>
                  <FormControl >
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                   Por favor, escriba los 6 dígitos enviados a su email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
  
  )
}

