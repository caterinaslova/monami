import CambiarContrasenaForm from '@/components/auth/CambiarContrasenaForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CambiarContrasenaPage() {
  return (
    <div className='flex justify-center mt-10 md:mt-20'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle className='text-center'>Cambiar mi contraseña</CardTitle>
        </CardHeader>
        <CardContent>
          <CambiarContrasenaForm />
        </CardContent>
      </Card>
    </div>
  );
}
