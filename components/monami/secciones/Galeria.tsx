import { LandPlot } from 'lucide-react';
import FotosVarias from './FotosVarias';
import Link from 'next/link';

export default function Galeria() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl tracking-widest md:text-5xl md:font-bold my-10'>
        Te esperamos!!!!
      </h1>
      <Link href="https://maps.app.goo.gl/UcyNPscFnckB6GnB9" target="_blank" className='flex items-center justify-center gap-2 px-10 py-5 mb-10 border  shadow border-stone-500 ring-2 ring-stone-100 rounded-2xl hover:shadow-xl hover:scale-95 cursor-grab transition-all duration-300'>
        <span className='text-[#00BDA7]'>
          <LandPlot size={48}/>
        </span>
        <span className='text-2xl font-semibold text-stone-950  tracking-wider'>Enrique Larreta 660</span>
      </Link>
      <FotosVarias />
    </div>
  );
}
