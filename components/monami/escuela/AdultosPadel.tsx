import BotonContactoNegro from '@/components/monami/generales/BotonContactoNegro';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdultosPadel() {
  return (
    <>
      <h1 className='my-5 text-lg md:text-xl font-semibold text-center'>
        Escuela de Padel de 15 a 100 años
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center  gap-3'>
        <div className='w-[90%] md:w-[30%] h-[600px] my-5'>
          <video
            controls
            autoPlay
            muted
            loop
            className=' rounded-xl w-full h-[600px] object-cover'
            poster='/imagenes/escuela.jpg'
          >
            <source src='/imagenes/padel3.mp4' type='video/mp4' />
            Disculpe, su explorador no admite videos.
          </video>
        </div>
        <div className=' w-[90%] md:w-[40%]'>
          <Card className=' h-[520px] md:h-[600px]'>
            <CardHeader className='flex flex-col justify-center items-center gap-5'>
              <CardTitle className='text-3xl'>
                Lunes 16:30 p/compartir
              </CardTitle>
              <CardTitle className='text-3xl'>
                Lunes 18:30 p/compartir
              </CardTitle>
              <CardTitle className='text-3xl'>
                Martes 18:30 p/compartir
              </CardTitle>
              <CardTitle className='text-3xl'>
                Jueves 18:00 p/compartir
              </CardTitle>
              <CardTitle className='text-3xl'>Jueves 19:00 vacante</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-stone-700 text-justify mb-2 hidden md:block'>
                Las clases duran 1 hora. Nos enfocamos de manera global en todo
                el desarrollo motriz del joven. De manera tal que pueda lograrse
                un equilibrio entre la diversión, la adquisión de habilidades
                necesarias para el desarrollo de este deporte y el hábito de una
                vida en permanente movimiento coordinado del cuerpo.
              </p>

              <h4 className='my-10 font-black tracking-widest text-center text-3xl'>
                     Anotate, vení a probar!!!
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
