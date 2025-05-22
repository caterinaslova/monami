// import { auth } from '@/auth'
import { auth } from '@/auth'
import LoginComponent from '@/components/auth/LoginComponent'
import { redirect } from 'next/navigation'
// import { redirect } from 'next/navigation'


export default async function LoginPage() {
  const session = await auth()
  if(!!session?.user?.id){
    if (session.user.role==="ADMIN"){
      redirect("/admin")
    }else{
      redirect("/monamipadelsquash/reservas")
    }
  }
  return (
    <LoginComponent/>
  )
}

