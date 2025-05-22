import { auth } from '@/auth';
import TituloCliente from '@/components/monami/generales/TituloCliente';
import TurnosSemanaCliente from '@/components/monami/reservas/TurnosSemanaCliente';
import { Separator } from '@/components/ui/separator';
import prisma from '@/lib/prisma';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
const hoy = new Date();
hoy.setHours(0, 0, 0, 0);
hoy.setUTCHours(hoy.getUTCHours() - 3)

const getTurnosPuntuales = async () => {
  const turnosPuntuales = await prisma.turnoPuntual.findMany({
    where: {
      fecha: { gte: hoy },
    },
    include: {
      cliente: true,
    },
  });
  return turnosPuntuales;
};
const getTurnosRegistradosPorClientes = async () => {
  const turnosRegistrados = await prisma.turnoRegistradoPorCliente.findMany({
    where: {
      fecha: { gte: hoy },
    },
    // include: {
    //   usuario: true,
    // },
  });
  return turnosRegistrados;
};

const getTurnosFijos = async () => {
  const turnosFijos = await prisma.turnoFijo.findMany({
    include: {
      cliente: true,
    },
  });
  return turnosFijos;
};

const getHorario = async () => {
  const horario = await prisma.horarioPosible.findMany({
    where: {
      OR:[
        { abierto: true},
        { mostrar:true}
      ]
     
    },
    orderBy: [{ dia: 'asc' }, { horarioComienzo: 'asc' }],
  });
  return horario;
};

export default async function ReservasPage() {
  const turnosPuntuales = await getTurnosPuntuales();
  const turnosFijos = await getTurnosFijos();
  const turnosAutoRegistrados = await getTurnosRegistradosPorClientes();
  const horario = await getHorario();
  const session = await auth();
  const email = session?.user?.email ? session.user.email : '';
  const userId = session?.user?.id ? session.user.id : '';

  return (
    <div
      className='w-full h-[100vh]flex mt-25 justify-center items-center'
      id='home'
    >
      <TituloCliente texto={'Turnos de la semana'} />
      <Separator className='mb-3' />
      <Suspense  fallback={<p className='text-xl text-stone-700 flex justify-center items-center mt-10'>Cargando datos...</p>}>
        <TurnosSemanaCliente
          turnosPuntuales={turnosPuntuales}
          turnosFijos={turnosFijos}
          horario={horario}
          email={email}
          userId={userId}
          turnosAutoRegistrados={turnosAutoRegistrados}
        />
      </Suspense>
      <ToastContainer />
    </div>
  );
}
