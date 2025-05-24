"use server"

import prisma from "@/lib/prisma"
import validaDni from "@/lib/validaciones/validaDni";
import validaEmailOpcional from "@/lib/validaciones/validaEmailOpcional";
import validaTelefono from "@/lib/validaciones/validaTelefono";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { Mensajeria } from "./zz-tiposDatosGenerales";


const ClienteFormSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: 'El nombre es obligatorio' })
    .max(50),
  telefono: z
    .string().refine(telefono=>validaTelefono(telefono),{message:'Debe escribir un teléfono válido'}),
  email: z
    .string().refine(email=>validaEmailOpcional(email),{message:'Si escribe email, debe ser válido.'}),
  dni: z
    .string().refine(dni=>validaDni(dni),{message:'El DNI solo puede estar vacío o tener números y puntos'}),
    informacion:z.optional(z.string()),
    createdAt:z.optional(z.date()),
    updatedAt:z.optional(z.date())
 
});


export const createCliente = async (mensajeria:Mensajeria,formData:FormData)=>{
  try {

    const dataCruda = Object.fromEntries(formData)

    const dataValida = ClienteFormSchema.safeParse(dataCruda)
    if (!dataValida.success){
      const errores= dataValida.error.issues.map(error=>error.message)
      return{
        errors:errores,
        exitoso:''
      }
    }
    if (dataValida.data.telefono){
      const registro = await prisma.cliente.findFirst({ where:{
                telefono:dataValida.data.telefono,
           }
       })
      if (registro){
        return{
          errors:['Ese teléfono ya existe'],
          exitoso:''
        }
      }
    }
    if (dataValida.data.email){
      const registro = await prisma.cliente.findFirst({ where:{
          email:dataValida.data.email
      }
       })
      if (registro){
        return{
          errors:['Ese  email ya existe'],
          exitoso:''
        }
      }
    }
   await prisma.cliente.create({
        data: {
          nombre: dataValida.data.nombre,
          email: dataValida.data.email,
          telefono: dataValida.data.telefono,
          dni:dataValida.data.dni,
          informacion:dataValida.data.informacion ? dataValida.data.informacion : '',
          createdAt: new Date(),
          updatedAt:new Date()
        }
    })
    revalidatePath('/admin/cliente')
  return{
    errors:[],
    exitoso:'Los datos fueron grabados con éxito'
  }
    
  } catch (error) {
    return{
      errors:['Hubo un error'],
      exitoso:''
    }
  }

}


export const eliminarCliente= async(clienteId:string,mensaje:Mensajeria)=>{
  try {
    const registro = await prisma.cliente.findFirst({ where:{id:clienteId}})
    if (!registro){
      return{
        errors:['No existe es registro'],
        exitoso:''
      }
    }
    await prisma.cliente.delete({where:{id:clienteId}})
    revalidatePath('/admin/cliente')
    return{
      errors:[],
      exitoso:'El registro fue eliminado correctamente.'
    }
    
  } catch (error) {
    return{
      errors:['Hubo un error'],
      exitoso:''
    }
    
  }

}

export const modificarCliente = async (clienteId:string, mensaje:Mensajeria, formData:FormData)=>{
  try {
    const registro = await prisma.cliente.findFirst({ where:{id:clienteId}})
    if (!registro){
      return{
        errors:['No existe es registro'],
        exitoso:''
      }
    }

    const dataCruda = Object.fromEntries(formData)

    const dataValida = ClienteFormSchema.safeParse(dataCruda)
    if (!dataValida.success){
      const errores= dataValida.error.issues.map(error=>error.message)
      return{
        errors:errores,
        exitoso:''
      }
    }
    await prisma.cliente.update({where:{id:clienteId}, data:dataValida.data})
    revalidatePath('/admin/cliente')
    return{
      errors:[],
      exitoso:'El registro fue modificado correctamente.'
    }
    
  } catch (error) {
    return{
      errors:['Hubo un error'],
      exitoso:''
    }
    
  }

}
  export const modificarPasswordAction = async(data:any,token:string)=>{
    try {

      const passwordNueva= {password: data.password, token}
 
       
      return { ok: true, mensaje: 'Password modificada' };
    } catch (error) {
      
      return { ok: false, mensaje: 'Credenciales no válidas' };
    }
  }