"use server"

import prisma from "@/lib/prisma";
import { z } from "zod";

const RespuestaJsonDeApi = z.object({
  mensaje: z.string(),
});
const TokenSchema = z
  .string({ message: 'Token no válido' })
  .length(6, { message: 'Token no válido' });


export async function confirmAccountAction ({token}:{token:string}){
 
 
    const tokenConfirm = TokenSchema.safeParse(token)
   
    if(!tokenConfirm.success){
        return{
            errors:tokenConfirm.error.issues.map(issue=>issue.message),
            success:''
        }
    }


    // confirmar el usuario
    const usuario = await prisma.usuario.findFirst({where:{tokenDeVerificacion:token}})

    if(!usuario){
      return{
        errors:["Token inválido"],
        success:''
      }
    }

    await prisma.usuario.update({where:{id:usuario.id},data:{
      tokenDeVerificacion:'',
      cuentaVerificada:true,
      fechaVerificacion: new Date()
    }})
   

    return{
        errors:[],
        success:'ok'
    }
}