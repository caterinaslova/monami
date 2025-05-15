import {z} from 'zod'
import { passwordSchema } from './passwordSchema'

export const passwordMathSchema = z.object({
    password:passwordSchema,
    passwordConfirm:z.string()
}).superRefine((data,ctx)=>{
    if(data.password !== data.passwordConfirm){
        ctx.addIssue({
            code:z.ZodIssueCode.custom,
            path:["passwordConfirm"],
            message:"Las contraseñas deben coincidir"
        })
    }
})