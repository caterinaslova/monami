import InfoTorneos from "@/components/monami/torneos/InfoTorneos";


export default function TorneosPage() {
  return (
    <div className="flex flex-col p-5 m-10 mt-20">
      <h1 className="text-2xl text-center mb-3">Torneos en Monami Padel Squash</h1>
      <InfoTorneos/>
      <InfoTorneos/>
      <InfoTorneos/>
    </div>
  )
}
