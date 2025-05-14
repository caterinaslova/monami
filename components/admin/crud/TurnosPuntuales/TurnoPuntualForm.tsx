'use client';

import { es } from "date-fns/locale";
import { Controller } from "react-hook-form";

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import {
  createTurnoPuntual
} from '@/actions/turnosPuntualesAction';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { horariosPosibles } from '@/lib/datos';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
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

const formSchema = z.object({
  fecha: z.date(),
  clienteId: z
    .string()
    .min(2, { message: 'El cliente es obligatorio' })
    .max(50),
  cancha: z.string().min(2, { message: 'Debe elegir cancha' }),
  horaComienzo: z.string().min(2, { message: 'Debe elegir hora de inicio' }),
  cantidadModulos: z.string().min(1, { message: 'Debe elegir tiempo' }),
});

type TurnoPuntualFormProps = {

  clientesSelect: { label: string; value: string }[];
};

const hoy = new Date()
hoy.setHours(0,0,0,0)

export default function TurnoPuntualForm({

  clientesSelect,
}: TurnoPuntualFormProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [openFecha, setOpenFecha] = useState(false);

  const [fecha, setFecha] = useState(new Date());
  const [hayCliente,setHayCliente] = useState(false)
  const [mensaje, envioDatos] = useActionState(createTurnoPuntual, {
      errors: [],
      exitoso: '',
    }
  );

  useEffect(() => {
    if (mensaje.errors.length) {
      mensaje.errors.map((error) => toast.error(error));
    }
    if (mensaje.exitoso) {
      toast.success(mensaje.exitoso);
      router.push('/admin/turnosPuntuales');
    }
  }, [mensaje]);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clienteId:'',
      fecha:hoy,
      cancha: '',
      horaComienzo:'',
      cantidadModulos:'',
    },
    mode:'onChange'
  });

  const horariosAbiertos = horariosPosibles.filter((item) => item.abierto);


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
        <div className='mt-5 flex flex-col justify-center items-center space-y-2 md:space-y-5 space-x-10'>
          <FormField
            control={form.control}
            name='clienteId'
            render={({ field }) => (
              <FormItem className='flex flex-col  mx-auto'>
                <FormLabel className={`${hayCliente && "data-[error=true]:text-primary"}`}>Cliente</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        role='combobox'
                        className={cn(
                          'w-[300px] justify-between mb-4 md:mb-0',
                          !field.value && 'text-muted-foreground',
                           hayCliente && 'aria-invalid:ring-default/20 dark:aria-invalid:ring-default/40 aria-invalid:border-default'
                        )}
                      >
                        {field.value
                          ? clientesSelect.find(
                              (cliente) => cliente.value === field.value
                            )?.label
                          : 'Seleccione un cliente'}
                        <ChevronsUpDown className='opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-[300px] p-0'>
                    <Command {...field}>
                      <CommandInput
                        placeholder='Buscar cliente...'
                        className='h-9'
                      />
                      <CommandList>
                        <CommandEmpty>No se encontró.</CommandEmpty>
                        <CommandGroup className=''>
                          {clientesSelect.map((cliente) => (
                            <CommandItem
                              value={cliente.label}
                              key={cliente.value}
                              onSelect={() => {
                                form.setValue('clienteId', cliente.value);
                                setOpen(false);
                                setHayCliente(true)
                              }}
                            >
                              {cliente.label}
                              <Check
                                className={cn(
                                  'ml-auto',
                                  cliente.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {
                  !hayCliente &&   <FormMessage />
                }
     
              </FormItem>
            )}
          />
        
          <FormField
            control={form.control}
            name='clienteId'
            render={({ field }) => (
              <FormItem className=''>
                <FormControl>
                  <Input {...field} hidden />
                </FormControl>
             </FormItem>
            )}
          />
          <div className='flex  flex-col justify-center items-center md:border border-stone-200 rounded-2xl  py-4 px-5 md:shadow '>
            <div className=' flex flex-col  flex-wrap  items-center justify-center'>
              <FormField
                control={form.control}
                name='cancha'
                render={({ field }) => (
                  <FormItem className='mb-4'>
                    <FormLabel>Cancha</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      {...field}
                    >
                      <FormControl>
                        <SelectTrigger className='w-44'>
                          <SelectValue placeholder='Seleccionar' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-44'>
                        <SelectItem value='Squash1'>Squash 1</SelectItem>
                        <SelectItem value='Squash2'>Squash 2</SelectItem>
                        <SelectItem value='Squash3'>Squash 3</SelectItem>
                        <SelectItem value='Padel1'>Padel 1</SelectItem>
                        <SelectItem value='Padel2'>Padel 2</SelectItem>
                        <SelectItem value='Asador1'>Asador 1</SelectItem>
                        <SelectItem value='Asador2'>Asador 2</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name='fecha'
                render={({ field }) => (
                  <FormItem className='flex flex-col mb-8'>
                    <FormLabel>Fecha</FormLabel>
                    <Popover open={openFecha} onOpenChange={setOpenFecha}>
                      <PopoverTrigger asChild>
                        <FormControl >
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(fecha, "EEEE, dd-MM-yyyy", { locale: es })
                            ) : (
                              <span>Elija una fecha</span>
                            )}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          locale={es}
                          selected={field.value}
                          onSelect={(date) => {
                            setFecha(date!)
                            field.onChange(date)
                            setOpenFecha(false)
                          }}
                          disabled={(date) =>
                            date < new Date() || date === new Date()
                          }
                          initialFocus
                        />
                        
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
                <input type='hidden' value={format(fecha, 'dd-MM-yyyy')} name='fecha' />

            </div>
            <div className='flex flex-col md:flex-row flex-wrap md:gap-5  items-center justify-center'>
              <FormField
                control={form.control}
                name='horaComienzo'
                render={({ field }) => (
                  <FormItem className='mb-8'>
                    <FormLabel>Hora del Turno</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      {...field}
                    >
                      <FormControl>
                        <SelectTrigger className='w-44'>
                          <SelectValue placeholder='Inicio' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-44 px-6'>
                        {horariosAbiertos.map((item) => (
                          <SelectItem
                            key={item.id}
                            value={item.id.toString()}
                            className='px-6'
                          >
                            {item.horarioComienzo}
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
                  <FormItem className='mb-8'>
                    <FormLabel>Tiempo</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      {...field}
                    >
                      <FormControl>
                        <SelectTrigger className='w-44'>
                          <SelectValue placeholder='Seleccionar' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-44'>
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
            </div>
            <div className='flex items-center justify-center'>
   
                <Button className='cursor-pointer' type='submit'>
                  Guardar
                </Button>
         
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
