import Image from 'next/image'

export default function Logo() {
  return (
    <div>
       {/* <Image src="/generales/logo.png" alt="logo" width={250} height={250}/> */}
       <h1 className='text-3xl md:text-5xl font-bold'><span className='text-[#00BDA7]'>mon</span><span className='text-white'>ami.</span></h1>
       <h2 className='text-[#1B8239] text-sm md:text-normal text-center md:text-right font-semibold'>PADEL & SQUASH</h2>
    </div>
  )
}
