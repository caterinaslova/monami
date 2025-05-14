import estilos from '@/lib/styles/paginaprincipal.module.css';
import Link from 'next/link';
import BotonWhatsApp from '@/components/monami/generales/BotonContacto';
import Navbar from '../generales/Navbar';

export default function Portada() {
  return (
    <>
        <Navbar/>
      <div className={estilos.section}   style={{ clipPath: 'ellipse(75% 100% at 60% 50%)' }}>
        <div className={estilos.cajaImagen}>
           <video
            autoPlay
            muted
            className={estilos.video}
            poster='./anime/8-350px.png'
          >
            <source src='/anime/25.mp4' type='video/mp4' />
            Disculpe, su explorador no admite videos.
          </video>
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
    </>
  )
}
