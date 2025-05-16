'use client';
import { HorarioPosible } from '@/lib/generated/prisma';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createHorario } from '@/actions/horariosAction';
import { Button } from '@/components/ui/button';
import {
  Form
} from '@/components/ui/form';
import { startTransition, useActionState, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const FormSchema = z.object({
 
  campoAuxiliar:z.string()
});

type HorarioFormTypes = {
  horario: HorarioPosible;
};

export default function HorarioForm({ horario }: HorarioFormTypes) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  

  const [valor,setValor]= useState(horario.abierto)

  const formRef = useRef<HTMLFormElement>(null);
  const [mensaje, envioDatos] = useActionState(createHorario.bind(null,horario.id), {
    errors: [],
    exitoso: '',
  });
  const form = useForm<z.infer<typeof FormSchema>>();

   const recargarConParametros = () => {
    const params = searchParams.toString(); // convierte los parámetros a string
    const fullUrl = `${pathname}?${params}`;
    
    router.replace(fullUrl); // recarga la misma URL sin perder los parámetros
  };

  useEffect(()=>{
    if (mensaje.errors.length){
      recargarConParametros()
      toast.error(mensaje.errors[0])
    }
  },[mensaje])


  return (
    <div className='flex flex-col justify-center items-center mb-3'>
      <Form {...form}>
        <form
          action={envioDatos}
          ref={formRef}
          onSubmit={(evt) => {
            evt.preventDefault();

            form.handleSubmit(() => {
              startTransition(() => envioDatos(new FormData(formRef.current!)));
            })(evt);
          }}
          className='flex flex-col justify-center items-center'
        >

          <input name="campoAuxiliar" defaultValue={valor ?"on" :"off"} type="hidden"/>
           <Button type='submit' onClick={()=>setValor(!valor)} variant={"outline"} className={` cursor-pointer ${valor ? 'text-green-600 dark:text-green-400': 'text-stone-800 dark:text-stone-400'}`}>{horario.horarioComienzo}</Button>

          {/* <Button type='submit'>Confirmar</Button> */}
        </form>
      </Form>
    </div>
  );
}
