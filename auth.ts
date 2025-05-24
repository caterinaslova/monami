
import Credentials from "next-auth/providers/credentials"
import prisma from "./lib/prisma";
import { compare } from "bcryptjs";
import NextAuth, { type DefaultSession } from "next-auth"
 
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      role?: string | null
    }
  }

  interface User {
    id: string
    role?: string | null
  }
    interface JWT {
    role?: string
    id?: string
  }

}


 
export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  callbacks:{
    async jwt({token,user}){
      if(user){
        token.role = user.role
        token.id = user.id
      }
      return token;
    },
    async session({session,token}){
      session.user.id = token.sub as string
      session.user.role = token.role as string
      return session
    },

  },
    session: {
    strategy: "jwt", // importante para usar token con datos extendidos
  },
  providers: [
    Credentials({
      credentials:{
        email:{},
        password:{}
      },
      async authorize(credentials){
        const user= await prisma.usuario.findFirst({where:{email:credentials.email as string}})
        
        if (!user){
          throw new Error('Credenciales no válidas')
        }else{
          if (!user.cuentaVerificada){
             throw new Error('Revise su email para verificar la cuenta.')
          }
          const passwordCorrect = await compare(credentials.password as string, user.password!)
          if (!passwordCorrect){
             throw new Error('Credenciales no válidas')
          }
        }
        return{
          id:user.id.toString(),
          email:user.email,
          role:user.role,
          name:user.name
        }
      }

    })
  ],
});