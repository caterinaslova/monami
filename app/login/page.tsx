import { auth } from '@/auth'
import LoginComponent from '@/components/auth/LoginComponent'
import { redirect } from 'next/navigation'


export default async function LoginPage() {
  const session = await auth()
  if(!!session?.user?.id){
    redirect("/admin")
  }
  return (
    <LoginComponent/>
  )
}

