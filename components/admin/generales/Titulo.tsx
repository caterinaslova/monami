

export default function Titulo({titulo}:{titulo:string}) {
  return (
    <div className="border border-stone-950 dark:border-stone-400 rounded py-2 px-5 mb-10 flex flex-end items-center tracking-wide font-semibold">
        <h1 className="ml-auto">{titulo}</h1>
    </div>
  )
}
