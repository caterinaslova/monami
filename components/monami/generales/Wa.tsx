
import { SiWhatsapp } from "react-icons/si";

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
        <span className='text-green-600'><SiWhatsapp size={36!}/></span>
      </a>
    </div>
  );
}
