import { auth } from "@/auth"
import { redirect } from "next/navigation"


export default async function VerUnTurnoFijo() {
    const session = await auth()
    if (!session?.user.id || session?.user.role !== "ADMIN"){
      redirect('/login')
    }
  return (
    <div>VerUnTurnoFijo</div>
  )
}
