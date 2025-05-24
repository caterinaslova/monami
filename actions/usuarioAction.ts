"use server"

import { passwordMathSchema } from "@/lib/validaciones/passwordMatch";
import { z } from "zod"
import  {hash} from "bcryptjs"
import prisma from "@/lib/prisma";
import { passwordSchema } from "@/lib/validaciones/passwordSchema";
import { auth, signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { generateToken } from "@/lib/config/generateToken";
import { AuthEmail } from "@/lib/email";

interface User {
    id:string;
    name:string;
    email:string;
    role: string;
}


export const registerUser = async ({email,name,password,passwordConfirm}:{
    email:string,
    name:string,
    password:string,
    passwordConfirm:string
    
})=>{


    try {
        const newUserSchema = z.object({ name:z.string().min(2,{message:"Escriba su nombre, por favor."}),  email: z.string().email({message:"Debe escribir un email válido"}),
    }).and(passwordMathSchema);

    const newUserSchemaValidation = newUserSchema.safeParse({
        email,
        name,
        password,
        passwordConfirm,
     
    })

    if (!newUserSchemaValidation.success){
        return{
            error:true,
            message:newUserSchemaValidation.error.issues[0].message ?? "Hubo un error"
        }
    }

   
    const hashedPassword = await hash(password,10)

    const tokenDeVerificacion = generateToken()

    await prisma.usuario.create({data:{
        name,
        email,
        password:hashedPassword,
        twoFactorSecret:"",
        tokenDeVerificacion
   

    }})
    
     await AuthEmail.sendConfirmationEmail({name,email,token:tokenDeVerificacion})
    
     return{
            error:false,
            message:"El usuario ha sido creado correctamente"
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
                message:loginValidation.error.issues[0].message ?? "Hubo un error",
                user:{}
            }
        }
       const response = await signIn("credentials",{
            email,
            password,
            redirect:false
        })
       
        if (response?.error) {
              console.log(response.auth.caus)
                return { error:true, message: response.error,user:{} }
        }
        const user:User | null = await prisma.usuario.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    })

    if (!user) return { error:true,message: "Credenciales  no válidas",user:{} }

    return {
      error:false,
      message: '',
      user
    }
        // Esperamos a que se cree el token y esté la sesión disponible
        // const session = await import("@/auth").then(mod => mod.auth())
        // const role = session?.user.role
        // console.log(role)
        // return { success: true, role }
    } catch (error) {
       
        if (error instanceof AuthError) {
            
             return { error:true, message:"Credenciales no válidas / Cuenta no verificada", user:{} }
        }
    return { error:true, message:"Hubo un error" , user:{}  }
    }

}


export const logout = async ()=>{
 await signOut();
}

export const changePassword = async ({currentPassword,password,passwordConfirm}:{currentPassword:string,password:string,passwordConfirm:string})=>{

}

type DataEmail= {
    email:string;
}
const DataEmailRecibido = z.string().email()

export const olvidePasswordAction = async(data:DataEmail)=>{
    try {
     const dataValida = DataEmailRecibido.safeParse(data.email)
     if (!dataValida.success){
        return{
            ok:false,
            mensaje: 'Email no válido'
        }
     }
 
     const usuario = await prisma.usuario.findFirst({where:{email:dataValida.data}})
     if (!usuario){
        return{
            ok:false,
            mensaje: 'Email no válido'
        }
     }
   
      const tokenDeVerificacion = generateToken()
    await prisma.usuario.update({where:{id:usuario.id},data:{
      tokenDeVerificacion,

    }})
    await AuthEmail.sendPasswordResendToken({name:usuario.name,email:usuario.email,token:tokenDeVerificacion}) 

    return { ok: true, mensaje: 'Revisa email para cambiar la contraseña.' };

    } catch (error) {
      
      return { ok: false, mensaje: 'Credenciales no válidas' };
    }
  }
  type DataNuevaPass = {password:string}
  
    export const modificarPasswordAction = async(data:DataNuevaPass,token:string)=>{
    try {
      
        const usuario = await prisma.usuario.findFirst({where:{tokenDeVerificacion:token}})
        if (!usuario){
            return { ok: false, mensaje: 'Credenciales no válidas' };
        }
        const hashedPassword = await hash(data.password,10)

      await prisma.usuario.update({where:{id:usuario.id},data:{
      tokenDeVerificacion:'',
      password:hashedPassword

    }})
       
      return { ok: true, mensaje: 'Password modificada' };
    } catch (error) {
      
      return { ok: false, mensaje: 'Credenciales no válidas' };
    }
  }