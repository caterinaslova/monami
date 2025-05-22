import { auth } from "@/auth"
import { redirect } from "next/navigation"


export default function MisReservasPage() {
  const session = auth()
  if (!session){
    redirect('/login')
  }
  return (
    <div className=" min-h-screen flex justify-center items-center mt-10 md:text-7xl">MisReservasPage</div>
  )
}
