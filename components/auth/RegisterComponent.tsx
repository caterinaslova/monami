'use client';
import { registerUser } from '@/actions/administradoresAction';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
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
import { passwordMathSchema } from '@/lib/validaciones/passwordMatch';
import { zodResolver } from '@hookform/resolvers/zod';
import  Link  from 'next/link';
import { useForm } from 'react-hook-form';

import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({message:"Debe escribir un email válido"}),
}).and(passwordMathSchema);

export default function RegisterComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
   const response = await registerUser({
    email:data.email,
    password:data.password,
    passwordConfirm:data.passwordConfirm
   })

  // if(response?.error){
  //   form.setError("email",{message:response.message})
  // }else{
  //   toast.success(response.message)
  // }
   };
  return (
    <main className='flex justify-center items-center min-h-screen'>
      {
        form.formState.isSubmitSuccessful ?
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle className='text-center'>
                    Felicitaciones!  Administrador!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full'>
              <Link href="/login">Entrar al sistema</Link>
            </Button>
          </CardContent>
      
          </Card>
        :  (     
        <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Registración</CardTitle>
          <CardDescription>Registre el usuario administrador</CardDescription>
        </CardHeader>
        <CardContent>
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
               <Button type="submit" className='mt-2 cursor-pointer'>Registrarme</Button>
              </fieldset>
           
            </form>
          </Form>
        </CardContent>
      </Card>
        )
      }

    </main>
  );
  }
