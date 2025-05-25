'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

const imagenes = [
  { src: '/galeria/1.jpg', alt: 'Imagen 1' },
  { src: '/galeria/2.jpg', alt: 'Imagen 2' },
  { src: '/galeria/3.jpg', alt: 'Imagen 3' },
  { src: '/galeria/4.jpg', alt: 'Imagen 4' },
  { src: '/galeria/5.jpg', alt: 'Imagen 5' },
  { src: '/galeria/6.jpg', alt: 'Imagen 6' },
 { src: '/galeria/7.jpg', alt: 'Imagen 7' },
  { src: '/galeria/8.jpg', alt: 'Imagen 8' },
   { src: '/galeria/9.jpg', alt: 'Imagen 9' },
];

export default function FotosVarias() {
  const [indexActivo, setIndexActivo] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <>
      {/* GRID DE IMÁGENES */}
      <section  ref={sectionRef} className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
        {imagenes.map((img, i) => (
          <div
            key={i}
            className={` w-full h-80 rounded-xl shadow-lg transition-all duration-700 ease-out origin-top-right
            ${visible
              ? `opacity-100 translate-y-0 rotate-0 delay-${i * 150}`
              : 'opacity-0 translate-y-20 -rotate-12'}`
          }
          style={{ transitionDelay: `${i * 150}ms` }}
            onClick={() => setIndexActivo(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={300}
              className="w-full rounded-xl h-80 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </section>

            {/* <div className="fixed inset-0 bg-white/10 backdrop-blur-sm"></div> */}
      {/* MODAL DE SLIDE */}
      {indexActivo !== null && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] flex items-center justify-center z-50">
           
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIndexActivo(null)}
          >
            ✕
          </button>

          <button
            className="absolute left-4 text-white text-3xl"
            onClick={() =>
              setIndexActivo((prev) => (prev! > 0 ? prev! - 1 : imagenes.length - 1))
            }
          >
            ‹
          </button>

          <Image
            src={imagenes[indexActivo].src}
            alt=""
            width={300}
             height={300}
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />

          <button
            className="absolute right-4 text-white text-3xl"
            onClick={() =>
              setIndexActivo((prev) => (prev! < imagenes.length - 1 ? prev! + 1 : 0))
            }
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
