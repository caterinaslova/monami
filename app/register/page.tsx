import RegisterComponent from '@/components/auth/RegisterComponent'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
const getYaHayAdministradores = async()=>{
  const hay = await prisma.administrador.count({})
  if (hay > 0){
    return false
  }else{
    return true
  }
}

export default async function RegisterPage() {
 const primeraVez = await getYaHayAdministradores()
 if (!primeraVez){
  redirect("/login")
 }
  return (
    <RegisterComponent/>
  )
}
