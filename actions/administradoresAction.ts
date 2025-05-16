"use server"

import { passwordMathSchema } from "@/lib/validaciones/passwordMatch";
import { z } from "zod"
import  {hash} from "bcryptjs"
import prisma from "@/lib/prisma";
import { passwordSchema } from "@/lib/validaciones/passwordSchema";
import { signIn, signOut } from "@/auth";


export const registerUser = async ({email,password,passwordConfirm}:{
    email:string,
    password:string,
    passwordConfirm:string
})=>{


    try {
        const newUserSchema = z.object({  email: z.string().email({message:"Debe escribir un email válido"}),
    }).and(passwordMathSchema);

    const newUserSchemaValidation = newUserSchema.safeParse({
        email,
        password,
        passwordConfirm
    })

    if (!newUserSchemaValidation.success){
        return{
            error:true,
            message:newUserSchemaValidation.error.issues[0].message ?? "Hubo un error"
        }
    }

   
    const hashedPassword = await hash(password,10)

    await prisma.administrador.create({data:{
        email,
        password:hashedPassword,
        twoFactorSecret:""
    }})
        return{
            error:false,
            message:"El administrador ha sido creado correctamente"
        }
        
    } catch (error:any) {
        let mensajeError=""
           if (error.code === 'P2002') {
            mensajeError="El email ya existe."
            console.log('Campo duplicado:', error.meta?.target)
        } else {
            mensajeError="Hubo un error"
            console.error('Otro error:', error)
        }
        return{
            error:true,
            message:mensajeError
        }
        
    }
    
    
}

export const loginUser= async ({email,password}:{email:string,password:string})=>{
    try {
        const loginSchema = z.object({
          email: z.string().email({message:"Debe escribir un email válido"}),
          password:passwordSchema
        })
        const loginValidation = loginSchema.safeParse({email,password})
        if ( !loginValidation.success){
            return{
                error:true,
                message:loginValidation.error.issues[0].message ?? "Hubo un error"
            }
        }
        await signIn("credentials",{
            email,
            password,
            redirect:false
        })
    } catch (error) {
        return{
            error:true,
            message:"Credenciales no válidas"
        }
    }

}


export const logout = async ()=>{
 await signOut();
}

export const changePassword = async ({currentPassword,password,passwordConfirm}:{currentPassword:string,password:string,passwordConfirm:string})=>{

}