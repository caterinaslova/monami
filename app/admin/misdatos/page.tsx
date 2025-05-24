import { auth } from '@/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

const getMisDatos = async (usuarioId:string)=>{

  const turnos = await prisma.usuario.findFirst({where:{id:usuarioId}})
  return turnos
}

export default async function MisDatosAdminPage() {
    const session = await auth()
    if (!session?.user.id || session?.user.role !== "ADMIN"){
      redirect('/login')
    }
  const misDatos = await getMisDatos(session.user.id)
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="w-[350px] px-5 py-10" >
        <CardHeader className='w-full text-center'>
          <CardTitle>Mis datos</CardTitle>
        </CardHeader>
        <CardContent className=' flex flex-col justify-start gap-3'>
          <p><strong>Nombre: </strong>{' '}{session.user.name}</p>
          <p><strong>Email: </strong>{' '}{session.user.email}</p>
        </CardContent>
      </Card>
    </div>
  )
}
