'use client';
import estilos from '@/lib/styles/paginaprincipal.module.css'

export default function BotonWhatsApp() {
  const numero = '5493512521739'; // Código de país + número sin espacios
  const mensaje = 'Hola, quiero reservar cancha de: ';

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
     <button className={estilos.btn}>Reservar</button>
    </a>
  );
}
