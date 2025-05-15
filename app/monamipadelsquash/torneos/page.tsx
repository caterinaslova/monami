import TituloCliente from "@/components/monami/generales/TituloCliente";
import InfoTorneos from "@/components/monami/torneos/InfoTorneos";


export default function TorneosPage() {
  return (
    <div className="flex flex-col p-5 m-10 mt-20">
      <TituloCliente texto="Torneos en Monami Padel Squash"/>
      <InfoTorneos/>
      <InfoTorneos/>
      <InfoTorneos/>
    </div>
  )
}
