'use client';
import { loginUser } from '@/actions/usuarioAction';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { passwordSchema } from '@/lib/validaciones/passwordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import  Link  from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { z } from 'zod';


const formSchema = z.object({
  email: z.string().email({message:"Debe escribir un email válido"}),
  password:passwordSchema
})

export default function LoginComponentModal()  {

  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
   const response = await loginUser({
    email:data.email,
    password:data.password,

   })
   if (response?.error){
    form.setError("root",{message:response.message})
   }else{
    router.push('/')
   }
}
  return (

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} >
              <fieldset disabled={form.formState.isSubmitting} className='flex flex-col gap-4'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type='email' />
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
                {
                  form.formState.errors.root && <FormMessage>{form.formState.errors.root.message}</FormMessage>
                }

               <Button type="submit" className='mt-2 cursor-pointer'>Entrar</Button>
              </fieldset>
           
            </form>
          </Form>
  )
}
