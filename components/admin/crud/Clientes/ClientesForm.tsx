'use client';

import { createCliente, modificarCliente } from '@/actions/clientesAction';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Cliente } from '@/lib/generated/prisma';
import validaDni from '@/lib/validaciones/validaDni';
import validaEmailOpcional from '@/lib/validaciones/validaEmailOpcional';
import validaTelefono from '@/lib/validaciones/validaTelefono';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Dispatch,
  SetStateAction,
  startTransition,
  useActionState,
  useEffect,
  useRef,
} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

const formSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre es obligatorio' }).max(50),
  telefono: z
    .string()
    .refine((telefono) => validaTelefono(telefono), {
      message: 'Debe escribir un teléfono válido',
    }),
  email: z
    .string()
    .refine((email) => validaEmailOpcional(email), {
      message: 'Si escribe email, debe ser válido.',
    }),
  dni: z
    .string()
    .refine((dni) => validaDni(dni), {
      message: 'El DNI solo puede estar vacío o tener números y puntos',
    }),
  informacion: z.optional(z.string()),
});

type ClienteFormProps = {
  tarea: 'agregar' | 'modificar' | 'ver';
  cerrarModal?: Dispatch<SetStateAction<boolean>>;
  cliente?: Cliente | null;
};

export default function ClientesForm({
  cerrarModal,
  tarea,
  cliente,
}: ClienteFormProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [mensaje, envioDatos] = useActionState(
    tarea === 'agregar'
      ? createCliente
      : modificarCliente.bind(null, cliente!.id),
    {
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
      if (cerrarModal) {
        cerrarModal(false);
      } else {
        router.push('/admin/clientes');
      }
    }
  }, [mensaje]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: tarea === 'agregar' ? '' : cliente?.nombre,
      telefono: tarea === 'agregar' ? '' : cliente?.telefono,
      email: tarea === 'agregar' ? '' : cliente?.email,
      dni: tarea === 'agregar' ? '' : cliente?.dni,
      informacion: tarea === 'agregar' ? '' : cliente?.informacion,
    },
    mode: 'onTouched',
  });
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
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 space-x-2'>
          <FormField
            control={form.control}
            name='nombre'
            render={({ field }) => (
              <FormItem className='mb-8'>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} readOnly={tarea === 'ver'} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='telefono'
            render={({ field }) => (
              <FormItem className='mb-8'>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input {...field} readOnly={tarea === 'ver'} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='mb-8'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} readOnly={tarea === 'ver'} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='dni'
            render={({ field }) => (
              <FormItem className='mb-8'>
                <FormLabel>D.N.I.</FormLabel>
                <FormControl>
                  <Input {...field} readOnly={tarea === 'ver'} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='informacion'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Información adicional</FormLabel>
                <FormControl>
                  <Textarea className='resize-none' {...field} />
                </FormControl>
                <FormDescription>
                  Puedes escribir aquí algo que desees recordar de este cliente.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <div className='flex items-center justify-end'>
            {tarea === 'ver' ? (
              <Link href='/admin/clientes'>
                <Button type='button' className='cursor-pointer'>
                  Volver
                </Button>
              </Link>
            ) : (
              <Button className='cursor-pointer' type='submit'>
                Guardar
              </Button>
            )}
          </div>
        </DialogFooter>
      </form>
    </Form>
  );
}
