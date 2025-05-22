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
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { createTurnoGeneralAdmin } from '@/actions/createTurnogeneralAdminAction';
import { format } from 'date-fns/format';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  fecha: z.string().min(2, { message: 'Debe elegir fecha' }),
  clienteId: z
    .string()
    .min(2, { message: 'El cliente es obligatorio' })
    .max(50),
  cancha: z.string().min(2, { message: 'Debe elegir cancha' }),
  horaComienzo: z.string().min(2, { message: 'Debe elegir hora de inicio' }),
  cantidadModulos: z.string().min(1, { message: 'Debe elegir tiempo' }),
  tipoTurno: z.string(),
});

type TurnoPuntualFormProps = {
  clientesSelect: { label: string; value: string }[];
  horariosPosibles: HorarioPosible[];
  cancha: string;
  fecha: Date;
  horaComienzo: string;
};

const hoy = new Date();
hoy.setHours(0, 0, 0, 0);

export default function FormReserva({
  clientesSelect,
  cancha,
  fecha,
  horaComienzo,
}: TurnoPuntualFormProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [mensaje, envioDatos,cargandoDatos] = useActionState(createTurnoGeneralAdmin, {
    errors: [],
    exitoso: '',
  });

  useEffect(() => {
    if (mensaje.errors.length) {
      mensaje.errors.map((error) => toast.error(error));
    }
    if (mensaje.exitoso) {
      // toast.success(mensaje.exitoso);
      router.push('/admin');
    }
  }, [mensaje]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fecha: fecha ? format(fecha,'dd-MM-yyyy') : '',
      horaComienzo: horaComienzo ? horaComienzo : '',
      cancha:cancha ? cancha :'',
      cantidadModulos: '',
      tipoTurno: 'puntual',
      clienteId:''
    },
    mode: 'onChange',
  });

  return (
    <Form {...form}>
      <form
        action={envioDatos}
        className='  space-y-3'
        ref={formRef}
        onSubmit={(evt) => {
          evt.preventDefault();

          form.handleSubmit(() => {
            startTransition(() => envioDatos(new FormData(formRef.current!)));
          })(evt);
        }}
      >
        <fieldset disabled={cargandoDatos}>
          <input {...form.register('fecha')} type='hidden' />
          <input type='hidden'{...form.register("cancha")} />
          <input {...form.register('horaComienzo')}   type='hidden'  />

          <div className='mt-3 flex flex-col justify-center items-center space-y-2 md:space-y-3 '>
            <FormField
              control={form.control}
              name='tipoTurno'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Tipo de turno</FormLabel>
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
                      <SelectItem value='puntual'>Puntual</SelectItem>
                      <SelectItem value='fijo'>Fijo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='clienteId'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Cliente</FormLabel>
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
                      {clientesSelect.map((cliente) => (
                        <SelectItem key={cliente.value} value={cliente.value}>
                          {cliente.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='cantidadModulos'
              render={({ field }) => (
                <FormItem className='mb-2'>
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
                      <SelectItem value='1'>Media Hora</SelectItem>
                      <SelectItem value='2'>Una Hora</SelectItem>
                      <SelectItem value='3'>Una Hora y Media</SelectItem>
                      <SelectItem value='4'>Dos Horas</SelectItem>
                      <SelectItem value='5'>Dos Horas y Media</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {mensaje.exitoso && <div className='border border-green-500 rounded shadow text-sm p-4'>El turno ha sido registrado correctamente</div>}
          </div>
          <SheetFooter>
            <Button className='cursor-pointer' type='submit'>Registrar</Button>
            <SheetClose asChild>
              <Button className='cursor-pointer' type='button'>Continuar</Button>
            </SheetClose>
          </SheetFooter>

        </fieldset>
 
      </form>
    </Form>
  );
}
