import { z } from "zod";

export const passwordSchema =  z
    .string()
    .min(8, { message: 'Debe escribir al menos 8 caracteres' })