
import Footer from '@/components/monami/secciones/Footer';
import FotosVarias from '@/components/monami/secciones/FotosVarias';
import Galeria from '@/components/monami/secciones/Galeria';
import Portada from '@/components/monami/secciones/Portada';
import Portada2 from '@/components/monami/secciones/Portada2';

import Servicios from '@/components/monami/secciones/Servicios';



export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-10" id="home">
      <Portada2/>
      <Servicios/>
      <Galeria/>
      <FotosVarias/>
      <Footer/>
    
    </div>
  );
}
