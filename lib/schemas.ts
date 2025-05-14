import { z } from "zod";

export const DiaConLetras = z.enum(["gDomingo","aLunes","bMartes","cMiércoles","dJueves","eViernes","fSábado"])