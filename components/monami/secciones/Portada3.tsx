import estilos from '@/lib/styles/paginaprincipal.module.css';
import Image from 'next/image';
import BotonWhatsApp from '@/components/monami/generales/BotonContacto';
import Navbar from '../generales/Navbar';

export default function Portada() {
  return (
    <div className='w-full bg-stone-100 rounded-2xl flex justify-center items-center overflow-hidden'>
        <Navbar/>
      <div className={estilos.section3}   >
        <div className="flex justify-center items-center">
           {/* <video
            autoPlay
            muted
            className={estilos.video}
            poster='/imagenes/paletaraqueta.png'
          >
             <source src='/anime/25.mp4' type='video/mp4' />
            Disculpe, su explorador no admite videos. 
          </video>  */}
        <Image src="/imagenes/paletaraqueta.png" alt="foto" width={400} height={400} className='ml-20'/>
      
        </div>
        <div className={estilos.contenido}>
          <div className={estilos.logo}>
            <svg
              className={estilos.svg}
              width='100%'
              viewBox='0 0 300 100'
              xmlns='http://www.w3.org/2000/svg'
            >
              <text x='0' y='50px'>
                <tspan className={`${estilos.drawfill} ${estilos.mon}`}>
                  mon
                </tspan>
                <tspan className={`${estilos.drawfill} ${estilos.ami}`}>
                  ami
                </tspan>
              </text>
            </svg>
            <p className={estilos.sublogo}>PADEL & SQUASH</p>
        
          </div>
          <BotonWhatsApp/>
        </div>
      </div>
    </div>
  )
}
