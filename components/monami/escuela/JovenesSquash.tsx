import BotonContactoNegro from '@/components/monami/generales/BotonContactoNegro';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TituloCliente from '../generales/TituloCliente';


export default function JovenesSquash() {
  return (
    <>
      <TituloCliente texto="Escuela Squash para jóvenes de 7 a 14 años"/>
      <div className='flex flex-col md:flex-row justify-center items-center  gap-3'>
        <div className=' w-[90%] md:w-[30%] h-[600px] my-5'>
          <video
            controls
            autoPlay
            muted
            loop
            className=' rounded-xl w-full h-[600px] object-cover'
            poster='/imagenes/escuela.jpg'
          >
            <source src='/generales/escuela.mp4' type='video/mp4' />
            Disculpe, su explorador no admite videos.
          </video>
        </div>
        <div className='w-[90%] md:w-[40%]'>
          <Card className='h-[500px] md:h-[600px]'>
            <CardHeader className='flex flex-col justify-center items-center gap-5'>
              <CardTitle className='text-3xl'>Martes y Jueves 18:30</CardTitle>
              <CardTitle className='text-3xl'>Sábados 15:30</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-stone-700 text-justify mb-2 '>
                Las clases duran 1 hora. Nos enfocamos de manera global en todo
                el desarrollo motriz del joven. De manera tal que pueda lograrse
                un equilibrio entre la diversión, la adquisión de habilidades
                necesarias para el desarrollo de este deporte y el hábito de una
                vida en permanente movimiento coordinado del cuerpo.
              </p>
              <p className='text-stone-700 text-justify mb-2 hidden md:block'>
                {' '}
                Al mismo tiempo y según la capacidad y energía de cada uno, se
                lo prepara para la participación de torneos provinciales y
                nacionales, en la medida que el joven lo decida. Sin presiones,
                asimilando la vida deportiva como su mundo natural y corriente.
              </p>
        
              <h4 className='my-10 font-black tracking-widest text-center text-3xl'>
                Acercate, vení a ver!!!
              </h4>
              <div className='flex justify-center items-center'>
                <BotonContactoNegro />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
