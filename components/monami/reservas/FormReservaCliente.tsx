'use client';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { createTurnoGeneral } from '@/actions/createTurnoGeneralAction';
import { SheetClose, SheetFooter } from '@/components/ui/sheet';
import { HorarioPosible } from '@/lib/generated/prisma';
import { useRouter } from 'next/navigation';
import {
  Dispatch,
  SetStateAction,
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns/format';

const formSchema = z.object({
  fecha: z.string().min(2, { message: 'Debe elegir fecha' }),
  clienteId: z
    .string()
    .min(2, { message: 'Debe loguearse para reservar cancha.' })
    .max(50),
  cancha: z.string().min(2, { message: 'Debe elegir cancha' }),
  horaComienzo: z.string().min(2, { message: 'Debe elegir hora de inicio' }),
  cantidadModulos: z.string().min(1, { message: 'Debe elegir tiempo' }),
  tipoTurno: z.string().min(1, { message: 'Debe elegir tipo de Turno' }),
});

type TurnoPuntualFormProps = {

  horariosPosibles: HorarioPosible[];
  cancha: string;
  fecha: Date;
  horaComienzo: string;
  email?: string | null
  userId?:string | null
};

const hoy = new Date();
hoy.setHours(0, 0, 0, 0);

export default function FormReservaCliente({

  cancha,
  fecha,
  horaComienzo,
  email,
  userId,

}: TurnoPuntualFormProps) {
  const [hayError,setHayError] = useState(false)
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [mensaje, envioDatos,loading] = useActionState(createTurnoGeneral, {
    errors: [],
    exitoso: '',
  });

  useEffect(() => {
  
    if (mensaje.errors.length) {
      setHayError(true)
      
    }
    if (mensaje.exitoso) {
      // toast.success(mensaje.exitoso);
      router.push('/monamipadelsquash/reservas')
    }

  }, [mensaje]);

  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      clienteId: userId ? userId : '',
      fecha: fecha ? format(fecha,'dd-MM-yyyy') : '',
      horaComienzo: horaComienzo ? horaComienzo : '',
      cancha:cancha ? cancha :'',
      cantidadModulos: cancha==='Padel1' || cancha==="Padel2" ? '3' : '2',
      tipoTurno: 'puntual',
    },
    mode: 'onChange',
  });
  const squash = cancha==="Squash1" || cancha ==="Squash2" || cancha === "Squash3"
  return (
    <Form {...form}>
      <form
        action={envioDatos}
        className='  space-y-8'
        ref={formRef}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
  
            startTransition(() => envioDatos(new FormData(formRef.current!)));
          })(evt);
        }}
      >
        <input {...form.register('fecha')} type='hidden' />
        <input type='hidden'{...form.register("cancha")} />
        <input {...form.register('horaComienzo')}   type='hidden'  />
    

        <div className='mt-5 flex flex-col justify-center items-center space-y-2 md:space-y-5 '>
          <FormField
          control={form.control}
          name='clienteId'
          render ={({field})=>(
            <FormItem className='mb-8'>
              <FormLabel>{email}</FormLabel>
              <FormControl>
                 <Input {...field} readOnly type='hidden'/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
          />

          <FormField
            control={form.control}
            name='cantidadModulos'
            render={({ field }) => (
              <FormItem className='mb-8'>
                <FormLabel>Tiempo</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger className='w-48'>
                      <SelectValue placeholder='Seleccionar' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='w-48'>
                    {squash &&<SelectItem value='2'>Una Hora</SelectItem>}
                    <SelectItem value='3'>Una Hora y Media</SelectItem>
                    <SelectItem value='4'>Dos Horas</SelectItem>
                    <SelectItem value='5'>Dos Horas y Media</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" m-5 border border-stone-200 rounded p-3 ">
            {hayError && <p className="text-red-600">{mensaje.errors[0]}</p>}  
            {mensaje?.exitoso && <p className="text-green-600">{mensaje.exitoso}</p>}

          </div>
        </div>
        <SheetFooter>
            <Button className='cursor-pointer disabled:opacity-10' disabled={loading} type='submit' >{loading ? 'Registrando' : 'Registrar turno'}</Button>
          <SheetClose asChild>
            <Button className='cursor-pointer disabled:opacity-10' type='button' disabled={loading} >Cerrar Ventana</Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </Form>
  );
}
