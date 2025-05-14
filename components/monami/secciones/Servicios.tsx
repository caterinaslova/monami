import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Servicios() {
  return (
    <div className='flex flex-wrap gap-5 justify-center items-center'>
      <Card className='w-[350px] h-[510px] p-0 pb-4 hover:shadow-lg transition-all'>
        <CardHeader className='m-0 p-0'>
          <div className='w-[348px] h-[280px] relative'>
            <Image
              src={'/imagenes/23.jpg'}
              alt={'squash'}
              fill
              className='object-cover p-0 m-0 rounded-t-lg absolute top-0 right-0 left-0'
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>Squash</CardTitle>
          <CardDescription>
            Contamos con 3 canchas de squash modernas  diseñadas para ofrecer un entorno profesional, seguro y visualmente atractivo tanto para jugadores aficionados como para atletas de alto rendimiento. 
          </CardDescription>
        </CardContent>
        <CardFooter className='flex justify-center items-center'>
          <Link href='/monamipadelsquash/reservas'>
            <Button className='cursor-pointer tracking-wide hover:bg-stone-900 hover:tracking-wider transition-all'>Ver turnos disponibles</Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className='w-[350px] h-[510px] p-0 pb-4 hover:shadow-lg transition-all'>
        <CardHeader className='m-0 p-0'>
          <div className='w-[348px] h-[280px] relative'>
            <Image
              src={'/imagenes/padel.jpg'}
              alt={'squash'}
              fill
              className='object-cover p-0 m-0 rounded-t-lg absolute top-0 right-0 left-0'
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>Padel</CardTitle>
          <CardDescription>
            También tenemos 2 canchas de padel con césped sintético de alta calidad color verde, con relleno de arena de sílice para mejorar tracción y bote. Con luces opcionales para disfrutar una noche de deportes y amigos.


          </CardDescription>
        </CardContent>
        <CardFooter className='flex justify-center items-center'>
          <Link href='/monamipadelsquash/reservas'>
            <Button className='cursor-pointer tracking-wide hover:bg-stone-900 hover:tracking-wider transition-all'>Ver turnos disponibles</Button>
          </Link>
        </CardFooter>
      </Card>

      
      <Card className='w-[350px] h-[510px] p-0 pb-4 hover:shadow-lg transition-all'>
        <CardHeader className='m-0 p-0'>
          <div className='w-[348px] h-[280px] relative'>
            <Image
              src={'/imagenes/escuela.jpg'}
              alt={'squash'}
              fill
              className='object-cover p-0 m-0 rounded-t-lg absolute top-0 right-0 left-0'
            />
      
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>Escuela</CardTitle>
          <CardDescription>
            Nuestra escuela ofrece un espacio dinámico y profesional donde niños, jóvenes y adultos pueden aprender, mejorar y disfrutar del squash y el pádel en un ambiente amigable y motivador.
          </CardDescription>
        </CardContent>
        <CardFooter className='flex justify-center items-center'>
          <Link href='/monamipadelsquash/escuela'>
            <Button className='cursor-pointer tracking-wide hover:bg-stone-900 hover:tracking-wider transition-all'>Precios y horarios</Button>
          </Link>
        </CardFooter>
      </Card>


    </div>
  );
}
