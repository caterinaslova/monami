import AdultosPadel from '@/components/monami/escuela/AdultosPadel';
import AdultosSquash from '@/components/monami/escuela/AdultosSquash';
import JovenesSquash from '@/components/monami/escuela/JovenesSquash';

export default function EscuelaPage() {
  return (
    <div className='min-h-[100vh] w-full mt-[100px]' id="home">
      <JovenesSquash />
      <AdultosSquash/>
      <AdultosPadel/>
    </div>
  );
}
