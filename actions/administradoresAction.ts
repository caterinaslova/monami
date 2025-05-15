"use server"

import { passwordMathSchema } from "@/lib/validaciones/passwordMatch";
import { z } from "zod"


export const registerUser = async ({email,password,passwordConfirm}:{
    email:string,
    password:string,
    passwordConfirm:string
})=>{

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

    
}