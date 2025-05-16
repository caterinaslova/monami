import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./lib/prisma";
import { compare } from "bcryptjs";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks:{
    jwt({token,user}){
      if(user){
        token.id = user.id
      }
      return token;
    },
    session({session,token}){
      session.user.id = token.id as string
      return session
    }
  },
  providers: [
    Credentials({
      credentials:{
        email:{},
        password:{}
      },
      async authorize(credentials){
        const user= await prisma.administrador.findFirst({where:{email:credentials.email as string}})
        
        if (!user){
          throw new Error('Credenciales no válidas')
        }else{
          const passwordCorrect = await compare(credentials.password as string, user.password!)
          if (!passwordCorrect){
             throw new Error('Credenciales no válidas')
          }
        }
        return{
          id:user.id.toString(),
          email:user.email
        }
      }

    })
  ],
});