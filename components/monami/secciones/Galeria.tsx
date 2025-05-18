"use client"
import { LandPlot } from 'lucide-react';
import FotosVarias from './FotosVarias';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

export default function Galeria() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // se considera visible si el 30% está en pantalla
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-radial from-[#00BDA7] to-[#004B49] ">
           <section
      ref={sectionRef}
      className={`grid place-content-center h-screen justify-center`}
        >
   
      <h1 className={`text-3xl text-center text-secondary tracking-widest md:text-5xl md:font-bold my-10 transition-all duration-700 ease-out ${
          visible
            ? 'opacity-100 scale-100 delay-200'
            : 'opacity-0 scale-0 delay-0'
        }`} >
        Te esperamos!!!!
      </h1>
      <Link href="https://maps.app.goo.gl/UcyNPscFnckB6GnB9" target="_blank" className='mb-10' >
        <Button variant={"default"} className={`flex justify-center items-center gap-2  mx-auto text-xl px-10 py-15 shadow hover:shadow-cyan-50 hover:shadow-lg hover:cursor-pointer hover:bg-black hover:scale-105 transition-all  duration-700 ease-out ${
          visible
            ? 'opacity-100 translate-y-0 delay-600'
            : 'opacity-0 translate-y-2 delay-0'
        }`}>
          <span className=' text-[#00BDA7]'>
            <LandPlot className='h-20! w-20! ' />
          </span>
          <span className='text-2xl font-medium tracking-wide'>Enrique Larreta 660</span>
        </Button>
      </Link>
     
   
    </section>
      
    </div>

  );
}
