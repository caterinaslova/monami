

export default function ReferenciaOcupados() {
  return (
    <div className="flex items-center gap-4">
        <div className="flex gap-1 items-center"><div className="h-3 w-3 bg-green-200"> </div> <span className="tracking-wide">libre</span></div>
         <div className="flex gap-1 items-center"><div className="h-3 w-3 bg-rose-300"> </div> <span className="tracking-wide">ocupado</span></div>
          <div className="flex gap-1 items-center"><div className="h-3 w-3 bg-rose-600"> </div> <span className="tracking-wide">fijo</span></div>
    </div>
  )
}
