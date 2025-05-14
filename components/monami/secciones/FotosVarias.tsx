'use client';
import { useState } from 'react';

const imagenes = [
  { src: '/galeria/1.jpg', alt: 'Imagen 1' },
  { src: '/galeria/2.jpg', alt: 'Imagen 2' },
  { src: '/galeria/3.jpg', alt: 'Imagen 3' },
  { src: '/galeria/4.jpg', alt: 'Imagen 4' },
  { src: '/galeria/5.jpg', alt: 'Imagen 5' },
  { src: '/galeria/6.jpg', alt: 'Imagen 6' },
 { src: '/galeria/7.jpg', alt: 'Imagen 7' },
  { src: '/galeria/8.jpg', alt: 'Imagen 8' },
];

export default function FotosVarias() {
  const [indexActivo, setIndexActivo] = useState<number | null>(null);

  return (
    <div>
      {/* GRID DE IMÁGENES */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4">
        {imagenes.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded shadow"
            onClick={() => setIndexActivo(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-60 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

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

          <img
            src={imagenes[indexActivo].src}
            alt=""
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
    </div>
  );
}
