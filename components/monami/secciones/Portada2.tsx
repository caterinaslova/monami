import estilos from '@/lib/styles/paginaprincipal.module.css';
import Image from 'next/image';
import BotonWhatsApp from '@/components/monami/generales/BotonContacto';
import Navbar from '../generales/Navbar';

export default function Portada() {
  return (
    <div className="w-full   flex justify-center items-center bg-[radial-gradient(circle,_black_60%,_#004B49_40%,_#004B49_70%,_#00BDA7_100%)] ">
        <Navbar/>
      <div className={estilos.section2}   style={{ clipPath: 'ellipse(75% 100% at 60% 50%)' }}>
    
        {/* <div className={estilos.cajaImagen}>
           <video
            autoPlay
            muted
            className={estilos.video}
            poster='/imagenes/foto.jpg'
          >
            <source src='/anime/25.mp4' type='video/mp4' />
            Disculpe, su explorador no admite videos.
          </video>
        </div> */}
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
