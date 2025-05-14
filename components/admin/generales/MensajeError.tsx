import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function MensajeError({texto}:{texto:string}) {
  return (
    <>
    <h1 className='text-2xl text-red-600 text-center'>{texto}</h1>
    <Link href="/admin" className="flex justify-center items-center mt-5"><Button className="cursor-pointer">Continuar</Button></Link>
    </>
  )
}
