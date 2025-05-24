import {OlvidePasswordForm }from "@/components/autenticacion/OlvidePasswordForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


export default function OlvidePasswordPage() {
  return (
     <main className='flex justify-center items-center min-h-screen bg-radial from-[#00BDA7] to-[#004B49]'>
        <Card className="w-[350px] h-[380px] flex flex-col items-center">
            <CardHeader className="w-full p-3 text-center">
                <CardTitle><Link className='cursor-pointer text-xl' href={'/'}> Monami Padel&Squash</Link></CardTitle>
                <CardTitle>
                      Olvidé mi contraseña
                </CardTitle>
            </CardHeader>
            <CardContent>
                <OlvidePasswordForm/>
            </CardContent>
        </Card>
     </main>

  )
}
