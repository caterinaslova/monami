import TituloCliente from "@/components/monami/generales/TituloCliente";
import InfoTorneos from "@/components/monami/torneos/InfoTorneos";


export default function TorneosPage() {
  return (
    <div className="flex flex-col px-1 mx-1 mt-24">
      <TituloCliente texto="Torneos en Monami Padel Squash"/>
      <InfoTorneos/>
      <InfoTorneos/>
      <InfoTorneos/>
    </div>
  )
}
