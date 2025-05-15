import { LandPlot } from 'lucide-react';
import FotosVarias from './FotosVarias';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Galeria() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl tracking-widest md:text-5xl md:font-bold my-10'>
        Te esperamos!!!!
      </h1>
      <Link href="https://maps.app.goo.gl/UcyNPscFnckB6GnB9" target="_blank" className='mb-10' >
        <Button variant={"default"} className='flex justify-center items-center gap-2 text-xl px-10 py-15 shadow hover:shadow-cyan-50 hover:shadow-lg hover:cursor-pointer hover:bg-black hover:scale-105'>
          <span className=' text-[#00BDA7]'>
            <LandPlot className='h-20! w-20! ' />
          </span>
          <span className='text-2xl font-medium tracking-wide'>Enrique Larreta 660</span>
        </Button>
      </Link>
      <FotosVarias />
    </div>
  );
}
