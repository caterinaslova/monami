
import { SiWhatsapp } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Wa() {
  const numero = '5493512521739'; // Código de país + número sin espacios
  const mensaje = 'Hola, quiero reservar cancha de: ';

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  return (
    <div className='z-[4000] '>
      <a
        id='whatsApp'
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-10 right-10 text-white rounded-full shadow-lg hover:scale-125 transition duration-300 z-20'
        aria-label='logo whats app'
      >
        <div className='text-green-800 bg-[rgba(255,255,255,0.7)] rounded-full shadow p-0 '><span className="z-30! " ><IoLogoWhatsapp   size={48!}/></span></div>
      </a>
    </div>
  );
}
