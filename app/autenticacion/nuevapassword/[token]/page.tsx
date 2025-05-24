import { NuevaPasswordForm } from "@/components/autenticacion/NuevaPaswordForm";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


 type TokenParams = Promise<{token:string}>

export default async function OlvidePasswordPage({params}:{params:TokenParams}) {

  const {token} = await params
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-radial from-[#00BDA7] to-[#004B49]'>
        <Card className="w-[350px]  flex flex-col items-center">
            <CardHeader className="w-full text-center">
                <CardTitle className="text-xl">Monami Padel&Squash</CardTitle>
                <CardTitle>
                     Establecer nueva contraseña
                </CardTitle>
            </CardHeader>
            <CardContent>
                <NuevaPasswordForm token={token}/>
            </CardContent>
        </Card>

    </div>
  )
}
