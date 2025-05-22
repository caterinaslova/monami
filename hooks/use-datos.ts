import prisma from '@/lib/prisma';

const getClientesParaSelect = async () => {
  const clientes = await prisma.cliente.findMany({});

  const datosSelect = clientes.map((cliente) => {
    return {
      label: cliente.nombre,
      value: cliente.id,
    };
  });
  return datosSelect;
};

const getHorariosPosibles = async () => {
  const horariosPosibles = await prisma.horarioPosible.findMany({
    where: { abierto: true },
  });
  return horariosPosibles;
};

export async function useDatos() {
  const clientes = await getClientesParaSelect();
  const horariosPosibles = await getHorariosPosibles()
  return {clientes,horariosPosibles};
}
