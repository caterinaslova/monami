import estilos from '@/lib/styles/Loading.module.css'

export default function Loading() {
  return (
    
    <div className='h-[10rem] w-full flex flex-col justify-center items-center mt-10'>
        <div className={estilos.loader}></div>
        <h1 className="text-4xl text-stone-500 text-center py-10">Cargando turnos...</h1>
    </div>
  )
}
