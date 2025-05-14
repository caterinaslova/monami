import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import Image from "next/image"

export default function Footer() {
    const numero = '5493512521739'; // Código de país + número sin espacios
  const mensaje = 'Hola, quiero reservar cancha de: ';

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  return (
    <div className="bg-stone-950 w-full py-10 mt-10 flex  flex-col justify-center items-center gap-5">
    <div>
        <ul className='flex flex-col  justify-center items-center gap-3 md:flex-row md:flex-wrap md:gap-10'>
          <li>
            <a href='#home' className='text-lg text-stone-50 tracking-wide'>Inicio</a>
          </li>
          <li>
            <a href='/monamipadelsquash/reservas' className='text-lg text-stone-50 tracking-wide'>Reservas</a>
          </li>
          <li>
            <a href='#home' className='text-lg text-stone-50'><Image src="/generales/logo2.png" alt="monami logo" width={100} height={100}/></a>
          </li>
          <li>
            <a href='/monamipadelsquash/escuela' className='text-lg text-stone-50 tracking-wide'>Escuela</a>
          </li>
          <li>
            <a href='/monamipadelsquash/torneos' className='text-lg text-white tracking-wide'>Torneos</a>
          </li>
        </ul>
      </div>
    <h5 className="text-stone-50 text-sm">Monami Padel&Squash -  Marca Registrada</h5>
    <h5 className="text-stone-50 text-lg tracking-wide italic">Podés seguirme en las redes sociales:</h5>
    <div className="flex justify-center items-center gap-10">

        <a href="https://www.facebook.com/profile.php?id=100064661110809"><span className="text-sky-600"><FaFacebookSquare size={40} /></span></a>
        <a href="https://www.instagram.com/monami_ps/"><span className="text-pink-400"><SlSocialInstagram  size={38} /></span></a>
        <a href={url}><span className="text-green-600"><IoLogoWhatsapp size={40} /></span></a>
    </div>
</div>
  )
}
