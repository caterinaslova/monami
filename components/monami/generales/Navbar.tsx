'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Cambia el valor 50 según cuándo quieres el cambio
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del listener al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled ? 'bg-black text-white' : 'bg-transparent text-black'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 py-2'>
        <ul className='flex justify-center items-center gap-12 p-6'>
          <li className='cursor-pointer'>
            <Link
              href='/monamipadelsquash/escuela'
              className='text-white cursor-pointer tracking-[3px] font-[Roboto] '
            >
              Escuela
            </Link>
          </li>
          <li className='cursor-pointer '>
            <Link
              href='/monamipadelsquash/reservas'
              className='text-white cursor-pointer tracking-[3px] font-[Roboto] '
            >
              Reservas
            </Link>
          </li>
          <li className='cursor-pointer'>
            <Link
              href='/monamipadelsquash/torneos'
              className='text-white cursor-pointer tracking-[3px] font-[Roboto]'
            >
              Torneos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
