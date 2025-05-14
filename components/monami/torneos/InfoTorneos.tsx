import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'

export default function InfoTorneos() {
  return (
    <div className="flex justify-center items-center">
      <Card className='w-full mb-3 md:m-3  p-4 max-w-[25rem] md:max-w-[65rem]'>
        <div className='flex flex-col lg:flex-row '>
        <CardTitle className=' text-lg md:text-2xl text-sky-800 text-center mb-2  lg:hidden'>Torneo ACS </CardTitle>
          <div className='w-[100%] max-h-[20rem]  rounded  mx-auto '>
             <Image src="/torneos/foto.jpg" alt="foto" width={300} height={300} className='rounded'/>
          </div>
          <div className='w-full '>
            <CardContent className='mt-2'>
            <CardTitle className='hidden lg:block text-lg md:text-2xl text-sky-800'>Torneo ACS </CardTitle>
            <CardDescription className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem aut a quisquam unde voluptate temporibus, ex esse eius eos delectus aspernatur alias! Quod magni eius alias esse suscipit, quos at dolorem sit culpa tempora quasi quibusdam, repellat ut nostrum molestiae incidunt voluptatem. </CardDescription>
            <div className="mt-2">
              <p><strong>Categorias: </strong></p>
              <p><strong>Horarios: </strong></p>
              <p><strong>Precio de la inscripción: </strong></p>
              <p><strong>Premio: </strong> <span></span> <strong> </strong><span></span></p>
            </div>

            <div className=" flex gap-5 flex-wrap justify-center items-center">
              <p className="text-2xl text-red-700 mt-3 text-center"></p>
                        
                 <div className="mt-2 text-center">
                <a href={"/"} target="_blank" ><Button className='cursor-pointer tracking-widest uppercase hover:shadow-amber-400 hover:bg-amber-500'>Anotarse</Button></a>
                </div>
        
        
            </div>
          
            
            </CardContent>

          </div>
        </div>
      </Card>

    </div>
  );
}
